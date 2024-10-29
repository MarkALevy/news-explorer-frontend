import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credit">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <button className="footer__link">Home</button>
        <button className="footer__link">TripleTen</button>
        <button className="footer__link-gh"></button>
        <button className="footer__link-fb"></button>
      </div>
    </footer>
  );
}

export default Footer;
