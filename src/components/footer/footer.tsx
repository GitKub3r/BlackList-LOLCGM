import { FooterProps } from "../../types/FooterProps";
import "./footer.css";

export const Footer = ({ label, year }: FooterProps) => {
  return (
    <footer className="main-footer">
      <div className="main-footer-content">
        <h1 className="main-footer-copyright">
          Copyright &copy; {year} {label}
        </h1>
      </div>

      <div className="main-footer-link">
        <span>
          Apply for a hoster account at{" "}
          <b>
            <u>blacklistlolcgm@gmail.com</u>
          </b>
        </span>
      </div>
    </footer>
  );
};
