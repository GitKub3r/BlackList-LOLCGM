import { useRef } from "react";
import { Input } from "../../components/input/Input";
import { useStatusModal } from "../../context/StatusModalContext";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const API_URL = import.meta.env.VITE_API_URL;

export const LoginPage = () => {
  const { showStatus } = useStatusModal();
  const { login } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!username.trim() || !password.trim()) {
      showStatus("Both username and password are required.", "warning");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      switch (res.status) {
        case 200: {
          const token = await res.text();
          await login(token); // Usa el contexto de autenticación
          break;
        }
        case 401: {
          showStatus("Invalid username or password.", "error");
          break;
        }
        default: {
          showStatus("Unexpected error", "error");
        }
      }
    } catch (err) {
      showStatus("Network error", "error");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="main-app-container flex-v-center flex-v-align login-page-container">
      <form
        onSubmit={handleSubmit}
        className="main-app-login-form glassmorphism-light flex-v"
      >
        <div className="main-app-login-form-input-container flex-v">
          <Input
            label="Username"
            type="text"
            name="login-username"
            id="login-username-input"
            ref={usernameRef}
          />
          <Input
            label="Password"
            type="password"
            name="login-password"
            id="login-password-input"
            ref={passwordRef}
          />
        </div>

        <p className="main-app-login-form-forgot-password">
          Don't remember your password? Click{" "}
          <a href="/forgot-password">here</a>
        </p>

        <button>Log in</button>
      </form>
    </div>
  );
};
