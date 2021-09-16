import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      &copy; g'JAM
      <p className="footer-container">
        <a
          id="footer-link"
          href="https://www.linkedin.com/in/casey-mcclenathan/"
        >
          Casey
        </a>{" "}
        |{" "}
        <a id="footer-link" href="http://jexica.design">
          {" "}
          Jexica
        </a>{" "}
        |
        <a id="footer-link" href="https://www.linkedin.com/in/joshua-ramnanan/">
          {" "}
          Josh
        </a>{" "}
        |{" "}
        <a id="footer-link" href="https://www.linkedin.com/in/garrettfoster24/">
          Garrett
        </a>
      </p>
    </footer>
  );
}
