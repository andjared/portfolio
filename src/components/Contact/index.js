import React, { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [defaultValues, setDefaultValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setDefaultValues({
      ...defaultValues,
      [e.target.id]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oysq5fy",
        "template_kg2kc2p",
        form.current,
        "user_9qqtok280efSdKKxVi3aV"
      )
      .then(
        (result) => {
          console.log(result.text);
          //add success message
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className={styles.contact}>
      <h2 className="heading">Get in touch</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={defaultValues.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={defaultValues.email}
          onChange={handleChange}
        />

        <label htmlFor="message" id="message">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={defaultValues.message}
          onChange={handleChange}
        />

        <button type="submit" value="submit">
          Send
        </button>
      </form>
    </section>
  );
}
