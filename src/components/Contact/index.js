import React, { useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "react-feather";
import { Modal } from "./Modal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageStatus, setMessageStatus] = useState();

  const handleChange = (e) => {
    //set data for each input value
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //show message and disable form when submited
  const handleMessage = (status) => {
    setShowMessage(true);
    setMessageStatus(status);
  };

  //hide message & enable form when closed
  const handleModal = () => {
    setShowMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(() => {
          setFormData({ name: "", email: "", message: "" });
          handleMessage(true);
        })
        .catch((error) => {
          console.log(error.text);
        });
    } catch {
      handleMessage(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className="heading">Get in touch</h2>
      <div className={styles.container}>
        <div>
          {showMessage ? (
            <div className={styles.modal}>
              <Modal success={messageStatus} closeMessage={handleModal} />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formData.name || ""}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email || ""}
                required
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
                required
              />
              <button type="submit" value="submit">
                Send
              </button>
            </form>
          )}
        </div>

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
