import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
  <div className="container flexSB">
    <div className="left row">
      <h1>Flow with the latest Finflow updates</h1>
      <span>Your source for streamlined message conversion.</span>
    </div>
    <div className="right row">
      <input type="text" placeholder="Enter email address" />
      <i className="fa fa-paper-plane"></i>
    </div>
  </div>
</section>


      <footer>
        <div className="container padding">
          <div className="box logo">
            <div className="logo-container">
              <img src="/images/logo.svg" alt="FinFlow Logo" className="logo-img" />
              <h1 className="logo-text">FINFLOW</h1>
            </div>
            <span>AUTOMATE. OPTIMIZE. FLOW</span>
            <p>
              Take Control with Customization and Flexibility through FinFlow
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </div>
          </div>

          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>Benefits</li>
              <li>Dashboard</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedback</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className="fa fa-map" style={{ color: "#2d67d3" }}></i>
                FinTrend Technologies Inc,<br />
                170 Shawbrooke Green SW,<br />
                Calgary, Alberta T2Y 3C6,<br />
                Canada
              </li>
              <li>
                <i className="fa fa-phone-alt" style={{ color: "#2d67d3" }}></i>
                +1 (800) 123-4567
              </li>
              <li>
                <i className="fa fa-paper-plane" style={{ color: "#2d67d3" }}></i>
                support@finflow.com
              </li>
              <li>
                <i className="fa fa-clock" style={{ color: "#2d67d3" }}></i>
                Monday to Friday, 9 AM - 5 PM (EST)
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | Powered by <i className="fa fa-heart heart-icon"></i> FINTREND
        </p>
      </div>
    </>
  );
};

export default Footer;
