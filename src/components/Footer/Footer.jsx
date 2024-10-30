import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credit">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <Link to="/">
          <button className="footer__link">Home</button>
        </Link>
        <button className="footer__link">TripleTen</button>
        <Link to="https://github.com/MarkALevy">
          <button className="footer__link-gh"></button>
        </Link>
        <Link to="https://www.facebook.com/">
          <button className="footer__link-fb"></button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
