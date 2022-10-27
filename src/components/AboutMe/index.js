import React from "react";
import styles from "./AboutMe.module.scss";
import image from "../../assets/portfolio_image.jpg";

export default function AboutMe() {
  return (
    <section id="about" className={styles.section}>
      <h2 className="heading">About me</h2>
      <div className={styles.inner}>
        <div>
          <div className={styles.text}>
            <p>
              Two years ago I discovered myself in the world of coding and it
              all came so natural to me, mainly because my life motto is to
              never stop learning and if coding is anything - it is the
              never-ending learning.
            </p>
            <p>
              I am constantly looking for ways to improve my coding skills and I
              am actively searching for entry level positions or internships
              that could help me nurture my passion via immersion in the
              enterprise world.
            </p>
            <p>
              What excites the most about coding is the fact that I can make an
              impact on people's lives using my code and the possibility of
              participating in building any tools that can help us facilitate
              our daily life enthralls me.
            </p>
            <p className={styles.stack}>Current tech stack: </p>
          </div>

          <ul className={styles.list}>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Git</li>
          </ul>
        </div>
        <div className={styles.image}>
          <div className={styles.wrapper}>
            <img src={image} alt="portfolio_image" />
          </div>
        </div>
      </div>
    </section>
  );
}
