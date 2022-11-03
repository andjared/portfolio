import React from "react";
import styles from "./Footer.module.scss";
import { GitHub, Linkedin, Mail, Phone } from "react-feather";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <ul className={styles.social}>
        <li>
          <a
            href={"https://github.com/andjared"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub size={25} />
          </a>
        </li>
        <li>
          <a
            href={"https://www.linkedin.com/in/andja-zelenbaba-464673134/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={25} />
          </a>
        </li>
        <li>
          <a href={"mailto:zelenbaba.andja@gmail.com"}>
            <Mail size={25} />
          </a>
        </li>
        <li>
          <a href={"tel:+381652040432"}>
            <Phone size={25} />
          </a>
        </li>
      </ul>
      <p>
        Created by Andja Zelenbaba <span>&copy;2022 </span>
      </p>
    </footer>
  );
}
