import { Route, Routes } from "react-router";
import { Header } from "./common/components/header/Header";
import json_header_links_unlogged from "./common/json/data/header_unlogged.json";
import json_header_links_admin from "./common/json/data/header_admin.json";
import json_header_links_user from "./common/json/data/header_user.json";
import { HomePage } from "./common/pages/Home/Home";
import { Footer } from "./common/components/footer/Footer";
import { AboutPage } from "./common/pages/About/About";
import { LoginPage } from "./common/pages/Login/Login";
import { StatusModalProvider } from "./common/context/StatusModalContext";
import { AuthProvider, useAuth } from "./common/context/AuthContext";
import { useEffect, useState } from "react";
import { AccountPage } from "./common/pages/Logged/Account/Account";

function AppContent() {
  const { user } = useAuth();
  const [headerLinks, setHeaderLinks] = useState(
    Object.values(json_header_links_unlogged)
  );

  useEffect(() => {
    if (!user) {
      setHeaderLinks(Object.values(json_header_links_unlogged));
    } else if (user.role === "Admin") {
      setHeaderLinks(Object.values(json_header_links_admin));
    } else {
      setHeaderLinks(Object.values(json_header_links_user));
    }
  }, [user]);

  return (
    <>
      <Header links={headerLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <StatusModalProvider>
        <AppContent />
      </StatusModalProvider>
    </AuthProvider>
  );
}

export default App;
