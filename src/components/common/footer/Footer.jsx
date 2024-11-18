import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  // State to hold the email input
  const [email, setEmail] = useState("");

  // Function to handle the email submission
  const handleSubmit = async () => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzmqe0_l341EXRJIPoImi5taJwEV29X32yYk4D-pTqukJjHLFZO7xLPeJyasq2eayq0/exec"; // Replace with your Google Apps Script URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // 'no-cors' mode for simplicity; adjust if needed
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }), // Send email as form data
      });

      if (response) {
        alert("Email submitted successfully!");
        setEmail(""); // Clear the input after submission
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("Failed to submit email!");
    }
  };

  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Flow with the latest Finflow updates</h1>
            <span>Your source for streamlined message conversion.</span>
          </div>
          <div className="right row">
            <input
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
            />
            <i
              className="fa fa-paper-plane"
              onClick={handleSubmit} // Call the submit function when clicking the icon
              style={{ cursor: "pointer" }}
            ></i>
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
           
          </div>

          <div className="box link">
            <h3>Explore</h3>
            <ul>
            <li><Link to="/about"  style={{ color: 'black' }}>About Us</Link></li>
<li ><Link to="/features"  style={{ color: 'black' }}>Features</Link></li>
<li><Link to="/dashboard"  style={{ color: 'black' }}>Dashboard</Link></li>
<li ><Link to="/contact"  style={{ color: 'black' }}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
            <li><Link to="/benefits"  style={{ color: 'black' }}>Benefits</Link></li>
            <li ><Link to="/features"  style={{ color: 'black' }}>Who we are</Link></li>
            <li ><Link to="/features"  style={{ color: 'black' }}>FAQ</Link></li>
            <li ><Link to="/supported-conversions"  style={{ color: 'black' }}>Conversion</Link></li>
            <li ><Link to="/contact"  style={{ color: 'black' }}>Feedback</Link></li>
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
                +1 (403) 835-9164
              </li>
              <li>
                <i className="fa fa-paper-plane" style={{ color: "#2d67d3" }}></i>
                support@fintrendinc.com
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
