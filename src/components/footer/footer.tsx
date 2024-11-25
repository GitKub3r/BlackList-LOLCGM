import { FooterProps } from "../../types/FooterProps";
import "./footer.css";

export const Footer = ({ label, year }: FooterProps) => {
  return (
    <footer className="main-footer">
      <h1 className="main-footer-copyright">
        Copyright &copy; {year} {label}
      </h1>
    </footer>
  );
};
