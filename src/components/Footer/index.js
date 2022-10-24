import React from "react";
import { Mail, Phone } from "react-feather";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.contact}>
        <div className={styles.mail}>
          <a href={"mailto:zelenbaba.andja@gmail.com"}>
            <Mail size={20} />
          </a>
          <span>zelenbaba.andja@gmail.com</span>
        </div>
        <div className={styles.phone}>
          <a href={"tel:+381652040432"}>
            <Phone size={20} />
          </a>
          <span>+381652040432</span>
        </div>
      </div>
      <div>
        <p>@2022 Andja Zelenbaba</p>
      </div>
    </footer>
  );
}
