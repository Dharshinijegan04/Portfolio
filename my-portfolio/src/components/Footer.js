import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
   
        <div className="copyright">
          <p>
            © {currentYear} Selva Dharshini J. Made with <span className="heart">❤️</span> All rights reserved.
          </p>
        </div>
    </footer>
  );
}    

export default Footer;