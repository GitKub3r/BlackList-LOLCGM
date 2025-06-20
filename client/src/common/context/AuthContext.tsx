import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

type User = {
  id: number;
  username: string;
  password: string;
  role: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  // Decodifica el token y pide el usuario al backend
  const fetchUser = async (jwt: string) => {
    try {
      const decoded: any = jwtDecode(jwt);
      const userId =
        decoded.userId || decoded.id || decoded.sub || decoded["id"];
      if (!userId) return;
      const res = await fetch(`${API_URL}/users/${userId}`);
      if (res.ok) {
        const userData = await res.json();
        console.log("Fetched user data:", userData);

        setUser(userData);
      }
    } catch (err) {
      setUser(null);
    }
  };

  // Llama esto después de login
  const login = async (jwt: string) => {
    setToken(jwt);
    localStorage.setItem("token", jwt);
    await fetchUser(jwt);
    navigate("/"); // Redirige a la página de cuenta después del login
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/"); // Redirige a la página de login después del logout
  };

  // Al cargar, si hay token, intenta cargar el usuario
  useEffect(() => {
    if (token) fetchUser(token);
    else setUser(null);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token && !!user,
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
