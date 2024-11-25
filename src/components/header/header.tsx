import "./header.css";
import { HeaderProps } from "../../types/HeaderProps";
import { Link } from "react-router-dom"; // Importamos Link de React Router

export const Header = ({ title, linkSRC }: HeaderProps) => {
  return (
    <header className="main-header">
      <h1 className="main-header-title">{title}</h1>
      <nav className="main-header-nav">
        <ul className="main-header-nav-list">
          {linkSRC.map((link) => (
            <li className="main-header-nav-list-element" key={link.name}>
              <Link to={link.src}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
