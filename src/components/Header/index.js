import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import resume from "../../assets/resume.pdf";
import styles from "./Header.module.scss";
import { Home, AlignRight, XSquare } from "react-feather";

export default function Header() {
  //hide header while scrolling down
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  const handleSideMenu = () => {
    const media = window.matchMedia("(min-width : 768px)");
    if (media.matches) {
      setIsSideMenuOpen(false);
    }
  };

  useEffect(() => {
    isSideMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleSideMenu);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleSideMenu);
    };
  }, [lastScrollY, isSideMenuOpen]);

  return (
    <header
      className={
        showHeader ? styles.header : `${styles.header} ${styles.hiddenHeader}`
      }
    >
      <a href="#home">
        <div className={isSideMenuOpen ? styles.hidden : styles.home}>
          <Home size={25} />
        </div>
      </a>
      <nav className={isSideMenuOpen ? styles.hiddenNav : styles.nav}>
        <div className={styles.navLinks}>
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
        <button
          className={isSideMenuOpen ? styles.hidden : styles.btn}
          onClick={() => setIsSideMenuOpen((prev) => !prev)}
        >
          <AlignRight size={30} />
        </button>
        <div className={isSideMenuOpen ? styles.sideMenu : styles.hidden}>
          <button
            className={isSideMenuOpen ? styles.btn : styles.hidden}
            onClick={() => setIsSideMenuOpen((prev) => !prev)}
          >
            <XSquare size={35} />
          </button>
          <div className={styles.sideMenuLinks}>
            <ul onClick={() => setIsSideMenuOpen((prev) => !prev)}>
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
      </nav>
    </header>
  );
}
