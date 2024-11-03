import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credit">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <div className="footer__links_col">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <button className="footer__link">Home</button>
          </Link>
          <Link
            to="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="footer__link">TripleTen</button>
          </Link>
        </div>
        <div className="footer__links_row">
          <Link
            to="https://github.com/MarkALevy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="footer__link-gh"></button>
          </Link>
          <Link
            to="https://www.facebook.com/mark.levy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="footer__link-fb"></button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
