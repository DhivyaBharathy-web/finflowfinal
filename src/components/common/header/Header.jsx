import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Function to handle scrolling, add "scrolled" class when the user scrolls down
  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  // Add/remove event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top smoothly
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setClick(false); // Close the mobile menu after clicking a link
  };

  return (
    <>
      <Head />
      <header className={scrolling ? "scrolled" : ""}>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/supported-conversions" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/features" onClick={handleLinkClick}>Features</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>Benefits</Link>
            </li>
            {/* <li>
              <Link to="/dashboard" onClick={handleLinkClick}>Team</Link>
            </li> */}
            <li>
              <Link to="/benefits" onClick={handleLinkClick}>Advantages</Link>
            </li>
            <li>
              <Link to="/who-we-are" onClick={handleLinkClick}>Who we are</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>

          <div className="start">
            <Link to="/coming-soon" onClick={handleLinkClick}>
              <div className="button" style={{ color: "#FFF" }}>TRY OUR APP</div>
            </Link>
          </div>

          <button
            className="toggle"
            onClick={() => setClick(!click)}
            aria-label={click ? "Close menu" : "Open menu"}
          >
            {click ? <i className="fa fa-times" /> : <i className="fa fa-bars" />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
