import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/header/header";
import { Link } from "./types/Link";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Hoster } from "./pages/hoster/hoster";
import { Footer } from "./components/footer/footer";
import { NotFound } from "./pages/not-found/notfound";

const HEADER_TITLE: Link = {
  name: "BlackList",
  src: "/home",
};
const LINKS: Link[] = [
  {
    name: "Log In",
    src: "/login", // Cambiar para usar rutas
  },
];
const currentYear = new Date().getFullYear();

function App() {
  return (
    <Router>
      <Header title={HEADER_TITLE} linkSRC={LINKS} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hoster" element={<Hoster />} />
      </Routes>
      <Footer label="LOLCGM - Pyky" year={currentYear} />
    </Router>
  );
}

export default App;
