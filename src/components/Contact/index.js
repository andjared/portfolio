import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oysq5fy",
        "template_p38jw6o",
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
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="message" id="message">
          Message:
        </label>
        <textarea name="message" rows="4" />

        <input type="submit" value="submit" />
      </form>
    </section>
  );
}
