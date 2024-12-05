import { Link } from "react-router-dom";
import "./sidebar.css";
import { SidebarProps } from "../../types/SidebarProps";

export const Sidebar = ({ links }: SidebarProps) => {
  return (
    <ul className="main-header-sidebar">
      <li id="close-sidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#eaeaea"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </li>
      {links.map((link) => (
        <li className="sidebar-item" key={link.name}>
          <Link to={link.src}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};
