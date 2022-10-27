import React from "react";
import { Mail, Phone } from "react-feather";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>@2022 Andja Zelenbaba</p>
    </footer>
  );
}
