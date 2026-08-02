import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// import "./ContactForm.css";
import "./ContactFormV2.css";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

const INITIAL_TOUCH_STATE = {
  name: false,
  email: false,
  message: false,
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const [touched, setTouched] = useState(INITIAL_TOUCH_STATE);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const validateField = (field, value) => {
    const trimmed = value.trim();

    switch (field) {
      case "name":
        if (!trimmed) return "Please enter your name.";

        if (trimmed.length < 2)
          return "Name must contain at least 2 characters.";

        return "";

      case "email":
        if (!trimmed) return "Please enter your email.";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
          return "Please enter a valid email.";

        return "";

      case "message":
        if (!trimmed) return "Please enter a message.";

        if (trimmed.length < 25)
          return "Message should be at least 25 characters.";

        return "";

      default:
        return "";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    Object.entries(formData).forEach(([field, value]) => {
      const error = validateField(field, value);

      if (error) validationErrors[field] = error;
    });

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.currentTarget,
        process.env.REACT_APP_PUBLIC_KEY,
      );

      setStatus({
        type: "success",
        message: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData(INITIAL_FORM_STATE);

      event.target.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (field) => {
    if (!touched[field] || !errors[field]) return null;

    return <div className="contact-error">{errors[field]}</div>;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          value={formData.name}
          placeholder="Your name"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {renderError("name")}
      </div>

      <div className="contact-field">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="you@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {renderError("email")}
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows="7"
          value={formData.message}
          placeholder="Tell me about your project..."
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {renderError("message")}
      </div>

      <button className="contact-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.message && (
        <div className={`contact-status ${status.type}`}>{status.message}</div>
      )}
    </form>
  );
};

export default ContactForm;
