import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import resume from "../../assets/resume.pdf";
import styles from "./Header.module.scss";
import { Home, AlignRight, XSquare } from "react-feather";

export default function Header() {
  const [isNavHidden, setIsNavHidden] = useState(false);
  //hide header while scrolling down
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const media = window.matchMedia("(min-width : 768px)");

    if (media.matches && window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  const handleNav = () => {
    const media = window.matchMedia("(min-width : 768px)");
    if (media.matches) {
      setIsNavHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleNav);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleNav);
    };
  }, [lastScrollY]);

  return (
    <header className={showHeader ? styles.header : styles.hidden}>
      <a href="#home">
        <div className={isNavHidden ? styles.hidden : styles.home}>
          <Home size={25} />
        </div>
      </a>
      <nav className={isNavHidden ? styles.hiddenNav : styles.nav}>
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
          className={isNavHidden ? styles.hidden : styles.btn}
          onClick={() => setIsNavHidden((prev) => !prev)}
        >
          <AlignRight size={30} />
        </button>
        <div className={isNavHidden ? styles.hiddenMenu : styles.hidden}>
          <button
            className={isNavHidden ? styles.btn : styles.hidden}
            onClick={() => setIsNavHidden((prev) => !prev)}
          >
            <XSquare size={35} />
          </button>
          <div className={styles.hiddenMenuLinks}>
            <ul onClick={() => setIsNavHidden((prev) => !prev)}>
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
