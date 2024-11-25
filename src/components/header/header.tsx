import "./header.css";
import { HeaderProps } from "../../types/HeaderProps";

export const Header = ({ title, linkSRC }: HeaderProps) => {
  return (
    <header className="main-header">
      <h1 className="main-header-title">{title}</h1>
      <nav className="main-header-nav">
        <ul className="main-header-nav-list">
          {linkSRC.map((link) => (
            <li className="main-header-nav-list-element">
              <a href={link.src}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
