import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/supported-conversions">About</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/about">Benefits</Link>
            </li>
            {/* <li>
              <Link to="/dashboard">Team</Link>
            </li> */}
           
            <li>
              <Link to="/benefits">Advantages</Link>
            </li>
            <li>
<Link to="/who-we-are">Who we are</Link>
</li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="start">
            <Link to="/coming-soon">
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
