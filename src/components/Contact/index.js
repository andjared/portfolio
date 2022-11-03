import React, { useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "react-feather";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const handleChange = (e) => {
    //set data for each input value
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showSuccessMessage = () => {
    setIsSubmiting(true);
    //add success message
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ysq5fy",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ name: "", email: "", message: "" });
          showSuccessMessage();
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
      <div className={styles.container}>
        <form
          onSubmit={handleSubmit}
          className={isSubmiting ? styles.disabled : null}
        >
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

        <div className={styles.info}>
          <div className={styles.mail}>
            <a href={"mailto:zelenbaba.andja@gmail.com"}>
              <Mail size={25} />
              <span>zelenbaba.andja@gmail.com</span>
            </a>
          </div>
          <div className={styles.phone}>
            <a href={"tel:+381652040432"}>
              <Phone size={25} />
              <span>+381652040432</span>
            </a>
          </div>
          <div className={styles.address}>
            <MapPin size={25} />
            <span>Stara Pazova, Serbia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
