import React, { useState } from "react";
import { Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  let initialContactData = {
    user_name: "",
    email: "",
    message: "",
    errors: {
      user_name: "",
      email: "",
      message: "",
    },
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [contactData, setContactData] = useState(initialContactData);
  const [hasErrors, setHasErrors] = useState(false);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  const handleInputChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setContactData((values) => ({ ...values, [name]: value }));
    validate(name, value);
  };

  const validateName = (user_name) => /^[A-Za-z ]+$/g.test(user_name);
  const validateEmail = (email) => /^\S+@\S+\.\S+$/g.test(email);
  const validateTextArea = (message) => message.length > 0;

  const validate = (name, value) => {
    let errors = {};
    setHasErrors(false);

    if (name === "user_name" && !validateName(value)) {
      errors.user_name = "The user name must be valid.";
    }
    if (name === "email" && !validateEmail(value)) {
      errors.email = "The email must be valid.";
    }
    if (name === "message" && !validateTextArea(value)) {
      errors.message = "The user must supply a valid message to respond to.";
    }

    setHasErrors(Object.keys(errors).length > 0);
    setContactData((values) => ({ ...values, errors: errors }));
  };

  const getFormStatus = () => {
    return (
      hasErrors ||
      contactData.user_name === "" ||
      contactData.email === "" ||
      contactData.message === ""
    );
  };

  return (
    <form onSubmit={sendEmail}>
      <Col size={12} sm={12} className="px-1">
        <input
          type="text"
          name="user_name"
          value={contactData.user_name}
          placeholder="Name"
          onChange={handleInputChange}
        />
        {hasErrors &&
          (contactData.errors.user_name || contactData.user_name === "") && (
            <div style={{ color: "tomato" }}>
              {contactData.errors.user_name}
            </div>
          )}
      </Col>
      <Col size={12} sm={12} className="px-1">
        <input
          type="email"
          name="email"
          value={contactData.email}
          placeholder="Email Address"
          onChange={handleInputChange}
        />
        {hasErrors &&
          (contactData.errors.email || contactData.email === "") && (
            <div style={{ color: "tomato" }}>{contactData.errors.email}</div>
          )}
      </Col>
      <textarea
        rows="6"
        name="message"
        value={contactData.message}
        placeholder="Message"
        onChange={handleInputChange}
      ></textarea>
      {hasErrors &&
        (contactData.errors.message || contactData.message === "") && (
          <div style={{ color: "tomato" }}>{contactData.errors.message}</div>
        )}
      {/* <button type='submit' disabled={isSubmitting}>
        Send
      </button> */}
      <input
        type="submit"
        style={
          getFormStatus()
            ? { background: "tomato" }
            : { background: "dodgerblue" }
        }
        value={getFormStatus() ? "Complete Form to Send" : "Send"}
        disabled={getFormStatus()}
      />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;