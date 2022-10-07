import React from "react";
import resume from "../../assets/resume.pdf";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home">
          <div className={styles.logo}></div>
        </a>

        <div className={styles.links}>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#work-experience"> Work Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div>
            <a
              href={resume}
              className={styles.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        {/* <div className="menu">
        <button className="ham-menu"></button>
      </div> */}
      </nav>
    </header>
  );
}
