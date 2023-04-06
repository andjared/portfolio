import React from "react";
import { useState } from "react";
import styles from "./Work.module.scss";
import { data } from "./data.js";

export default function Work() {
  const [isActive, setIsActive] = useState(0);

  const { role, company, range, duties } = data[isActive];

  return (
    <section id="work-experience" className={styles.work}>
      <h2 className="heading">Work experience</h2>
      <div className={styles.inner}>
        <div className={styles.tabs}>
          {data.map((job, index) => {
            return (
              <button
                key={job.department}
                className={`${styles.btn} ${
                  index === isActive && styles.active
                }`}
                onClick={() => setIsActive(index)}
              >
                <span>{job.department}</span>
              </button>
            );
          })}
        </div>
        <article key={range} className={styles.description}>
          <h3>
            <span className={styles.role}>{role}</span>
            <span className={styles.company}>&nbsp;@&nbsp; {company}</span>
          </h3>
          <p className={styles.range}>{range}</p>
          <ul className={styles.duties}>
            {duties.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
