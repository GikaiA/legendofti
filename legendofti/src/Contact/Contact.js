import React from "react";
import "./Contact.css";
// import ticontact from '../images/ti-contact.jpg'

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-content">
      {/* <img src={ticontact} alt="ti-contact" className="ti-contact"></img> */}
      <div className="container">
        <h1>Please Email for Serious Inquiries</h1>
        <form className="contact-form">
          <label htmlFor="email">Your Email:</label>
          <input
            type="text"
            className="input-field"
            name="email"
            placeholder="person@example.com"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            className="message-box"
            placeholder="Message..."
          ></textarea>
          <div className="send-button">
            <button type="submit" value="Send">
              Send
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Contact;
