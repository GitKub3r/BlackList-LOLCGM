import { Link } from "react-router-dom";
import { NavbarProps } from "../../types/NavbarProps";
import "./navbar.css";
import { Sidebar } from "../sidebar/sidebar";

export const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="main-header-nav">
      <ul className="main-header-nav-list">
        <li className="nav-list-item hide-on-desktop" id="open-sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#eaeaea"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </li>
        {links.map((link) => (
          <li className="nav-list-item hide-on-mobile" key={link.name}>
            <Link to={link.src} className="hover-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Sidebar links={links} />
    </nav>
  );
};
