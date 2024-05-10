import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function ContactUs() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setShowSuccessMessage(true);
  }

  return (
    <div className="form-container">
      <h2 className="home-title">Contact Us</h2>
      <p className="form-decription">
        If you are interested in our properties, you can contact us by filling
        out the form below. As soon as possible, the TopRent team will contact
        you and help you with the necessary information.
      </p>
      {showSuccessMessage ? (
        <div className="success-message">
          <p className="success-paragraph">
            Your submited has been succed!
            <CheckCircleIcon style={{ fontSize: "24px", color: "green" }} />
          </p>
          <p className="success-paragraph">
            Thank you for contacting us! We will get back to you as soon as
            possible!
          </p>
        </div>
      ) : (
        <div className="form">
          <form onSubmit={handleFormSubmit}>
            <div className="input-container">
              <AccountCircleIcon />
              <input
                name="firstName"
                onChange={handleInputChange}
                type="text"
                value={input.firstName}
                placeholder="First Name"
                required
              />
            </div>
            <div className="input-container">
              <AccountCircleIcon />
              <input
                name="lastName"
                onChange={handleInputChange}
                type="text"
                value={input.lastName}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="input-container">
              <EmailIcon />
              <input
                name="email"
                onChange={handleInputChange}
                type="email"
                value={input.email}
                placeholder="Ex: topRent@gmail.com"
                required
              />
            </div>
            <div className="input-container">
              <ContactPhoneIcon />
              <input
                name="phone"
                onChange={handleInputChange}
                type="tel"
                value={input.phone}
                placeholder="Phone number"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <button className="submit-button" type="submit">
              Submit
              <ArrowUpwardIcon />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
