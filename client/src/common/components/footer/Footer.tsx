import { Link } from "react-router";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer glassmorphism">
      <h2 className="copyright">&copy; {year} LOLCGM</h2>

      <hr />

      <div className="main-footer-content">
        <div className="software-container">
          <h3>Open Source</h3>
          <p>
            Dive <a href="https://github.com/GitKub3r/BlackList-LOLCGM">into</a>
          </p>
        </div>
        <div className="contact-container">
          <h3>Our Contact</h3>
          <p>
            Write us <Link to="/contact">here</Link>
          </p>
        </div>
        <div className="policy-container">
          <h3>Our Policy</h3>
          <p>
            Check it <Link to="/policy">out</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
