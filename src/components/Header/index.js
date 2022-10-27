import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import resume from "../../assets/resume.pdf";
import styles from "./Header.module.scss";
import { Home } from "react-feather";

export default function Header() {
  //hide navbar while scrolling down
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={show ? styles.header : styles.hidden}>
      <nav className={styles.nav}>
        <a href="#home">
          <div className={styles.logo}>
            <Home size={25} />
          </div>
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
              <a href="#work-experience">Work Experience</a>
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
