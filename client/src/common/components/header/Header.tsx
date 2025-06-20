import "./Header.css";
import { Link } from "react-router";
import type { HeaderLink } from "../../types/HeaderLink";

interface HeaderProps {
  links: HeaderLink[];
}

const defaultLinks: HeaderLink[] = [
  { label: "About", icon: "info", url: "/about" },
  { label: "Contact", icon: "contact", url: "/contact" },
];

export const Header = ({ links }: HeaderProps) => {
  const headerLinks =
    links === undefined || links.length === 0 ? defaultLinks : links;

  return (
    <header className="flex-h-between flex-h-align main-app-header glassmorphism">
      <h1 className="main-app-header-title">
        <Link to="/" className="main-app-header-title-link">
          BlackList
        </Link>
      </h1>
      <nav className="main-app-header-nav">
        <ul className="flex-h-center main-app-header-nav-list">
          {headerLinks.map((link) => (
            <li key={link.label} className="main-app-header-nav-item">
              <Link
                to={link.url}
                className="main-app-header-nav-link hover-link"
              >
                <img
                  src={`icons/${link.icon}`}
                  alt={link.label}
                  className="hidden header-nav-link-icon"
                />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
