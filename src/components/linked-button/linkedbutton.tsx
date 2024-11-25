import { Link } from "react-router-dom";
import { LinkedButtonProps } from "../../types/LinkedButtonProps";
import "./linkedbutton.css";

export const LinkedButton = ({ link }: LinkedButtonProps) => {
  return (
    <Link to={link.src} className="linked-button">
      <p className="linked-button-text">{link.name}</p>
    </Link>
  );
};
