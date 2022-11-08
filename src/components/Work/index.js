import React from "react";
import { useState } from "react";
import styles from "./Work.module.scss";
import { data } from "./data.js";

export default function Work() {
  const [isActive, setIsActive] = useState(1);

  return (
    <section id="work-experience" className={styles.work}>
      <h2 className="heading">Work experience</h2>
      <div className={styles.inner}>
        <div className={styles.jobs}>
          {data.map((job) => {
            return (
              <button
                key={job.department}
                className={
                  isActive === job.id
                    ? `${styles.btn} ${styles.active}`
                    : styles.btn
                }
                onClick={() => setIsActive(job.id)}
              >
                <span>{job.department}</span>
              </button>
            );
          })}
        </div>
        {data.map((job) => {
          const { role, company, range, id, duties } = job;
          return (
            <div
              key={id}
              className={isActive === id ? styles.description : styles.hidden}
            >
              <h3>
                <span className={styles.role}>{role}</span>
                <span className={styles.company}>&nbsp;@&nbsp; {company}</span>
              </h3>
              <p className={styles.range}>{range}</p>
              <ul>
                {duties.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
