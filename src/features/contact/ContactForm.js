import React, { useState } from "react";
import { Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "../../app/styles/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [dirty, setDirty] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const validateField = (name, value) => {
    if (name === "name") {
      return /^[A-Za-z ]{2,}$/g.test(value)
        ? ""
        : "(only alphabetical characters allowed; minimum 2 chars)";
    }
    if (name === "email") {
      return /\S+@\S+\.\S+/g.test(value) ? "" : "(please provide email in valid format)";
    }
    if (name === "message") {
        console.log('here: ', value)
      return /^[A-Za-z ]{25,}$/g.test(value)
        ? ""
        : "(minimum 25 characters; only alphanumeric chars)";
    }
    return "";
  };

  const validateAll = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    const newTouched = {
      name: true,
      email: true,
      message: true,
    };
    setErrors(newErrors);
    setTouched(newTouched);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setDirty((d) => ({ ...d, [name]: value }));
    if (touched[name]) {
      setErrors((e) => ({ ...e, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!dirty[name]) return;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((e) => ({ ...e, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    if (!validateAll()) return;
    setSubmitted(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
        //   setStateMessage("Message sent!");
          setSubmitted(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setSubmitted(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Col size={12} sm={12} className="px-1">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && (!!errors.name && (touched.name || submitted)) && (
          <div style={{ color: "tomato" }}>{errors.name}</div>
        )}
      </Col>
      <Col size={12} sm={12} className="px-1">
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Address"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && (!!errors.email && (touched.email || submitted)) && (
          <div style={{ color: "tomato" }}>{errors.email}</div>
        )}
      </Col>
      <textarea
        rows="6"
        name="message"
        value={formData.message}
        placeholder="Message"
        onChange={handleChange}
        onBlur={handleBlur}
      ></textarea>
      {errors.message && (!!errors.message && (touched.message || submitted)) && (
        <div style={{ color: "tomato" }}>{errors.message}</div>
      )}
      {/* <button type='submit' disabled={isSubmitting}>
            Send
        </button> */}

      <button
        type="submit"
        disabled={(Object.values(errors).every(e => e === ''))}
        style={(Object.values(errors).every(e => e === '')) 
            ? { color: "dodgerblue" } 
            : { color: "tomato" }}
      >{(Object.values(errors).every(e => e === '')) ? "Submit" : "Check for Errors"}</button>

      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;