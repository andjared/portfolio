import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        Created by Andja Zelenbaba <span>&copy;</span>2022
      </p>
    </footer>
  );
}
