import React, { useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .sendForm(
        "service_oysq5fy",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          //add success message
        },
        (error) => {
          console.log(error.text);
          //add error message
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className="heading">Get in touch</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name || ""}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email || ""}
        />

        <label htmlFor="message" id="message">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows="8"
          onChange={handleChange}
          value={formData.message || ""}
        />

        <button type="submit" value="submit">
          Send
        </button>
      </form>
    </section>
  );
}
