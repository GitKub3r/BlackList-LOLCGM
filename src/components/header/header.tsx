import "./header.css";
import { HeaderProps } from "../../types/HeaderProps";
import { Link } from "react-router-dom"; // Importamos Link de React Router
import { Navbar } from "../navbar/navbar";
import { LinkProps } from "../../types/LinkProps";

const LINKS: LinkProps[] = [
  {
    name: "Actions",
    src: "/about",
  },

  {
    name: "Database",
    src: "/db",
  },

  {
    name: "Log In",
    src: "/login",
  },
];

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="main-header">
      <h1 className="main-header-title">
        {<Link to={title.src}>{title.name}</Link>}
      </h1>
      <Navbar links={LINKS} />
    </header>
  );
};
