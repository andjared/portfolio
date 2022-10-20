import React from "react";
import styles from "./Projects.module.scss";
import { data } from "./data.js";
import { GitHub, ExternalLink } from "react-feather";

export default function Projects() {
  console.log(data);
  return (
    <section id="projects" className={styles.projects}>
      <h2 className="heading">Some Things I've done</h2>
      <ul className={styles.list}>
        {data.map((project, index) => {
          return (
            <li key={index} className={styles.project}>
              <div className={styles.image}>
                <a
                  href="https://drvoshop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.wrapper}
                >
                  <img src={project.img} alt={project.img} />
                </a>
              </div>
              <div className={styles.content}>
                <p className={styles.overline}>Featured Project</p>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.description}>
                  <p>{project.description}</p>
                </div>
                <ul className={styles.tech}>
                  {project.tech.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <div className={project.links}>
                  <ul className={styles.links}>
                    <li>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub size={25} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={25} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
