import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.901364287013!2d-114.10032048808266!3d50.9070411715649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537174345dcd4f9d%3A0xe1ef06700dde145!2s170%20Shawbrooke%20Green%20SW%2C%20Calgary%2C%20AB%20T2Y%203C6%2C%20Canada!5e0!3m2!1sen!2sin!4v1730959992743!5m2!1sen!2sin";

  // State to handle form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your Google Apps Script URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbyZLdd0z-EcchtNgeO44yChd-fnzUZK4xeaRpCFd5TcjspH9lY1Vwb8sefpc_e-80ZpPQ/exec";

      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Message sent successfully!");
        // Clear form data
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="contact-page" id="contact">
      <Back className="back" title="CONTACT US" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={map}
              title="Google Maps Location"
              width="600"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>Take control of your message conversion today!</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  FinTrend Technologies Inc 170 Shawbrooke Green SW, Calgary,
                  Alberta T2Y 3C6 Canada
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>support@fintrendinc.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+1 (403) 835-9164</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Create a message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="primary-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
