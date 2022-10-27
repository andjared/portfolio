import React from "react";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div>
        <h2 className={styles.small}>Hi, my name is </h2>
      </div>
      <div>
        <h1 className={`${styles.big} ${styles.name}`}>Andja Zelenbaba</h1>{" "}
      </div>
      <div>
        <h3 className={`${styles.big} ${styles.subheading}`}>
          I build things for the web.
        </h3>
      </div>
      <div>
        <p className={styles.text}>
          Self-taught frontend developer. Currently looking for an entry level
          position or internship opportunity.
        </p>
      </div>
    </section>
  );
}
