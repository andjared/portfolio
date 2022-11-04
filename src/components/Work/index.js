import React from "react";
import { useState } from "react";
import styles from "./Work.module.scss";

export default function Work() {
  const [isActive, setIsActive] = useState("first");

  return (
    <section id="work-experience" className={styles.work}>
      <h2 className="heading">Work experience</h2>
      <div className={styles.inner}>
        <div className={styles.jobs}>
          <button
            className={
              isActive === "first"
                ? `${styles.btn} ${styles.active}`
                : styles.btn
            }
            onClick={() => setIsActive("first")}
          >
            <span>Department for missing persons</span>
          </button>
          <button
            className={
              isActive === "second"
                ? `${styles.btn} ${styles.active}`
                : styles.btn
            }
            onClick={() => setIsActive("second")}
          >
            <span>Driving school Vidana</span>
          </button>
        </div>
        <div
          className={isActive === "first" ? styles.description : styles.hidden}
        >
          <h3>
            <span className={styles.role}>Police Inspector</span>
            <span className={styles.company}>
              &nbsp;@&nbsp; Ministry of Interior
            </span>
          </h3>
          <p className={styles.range}>December 2017 - May 2022</p>
          <ul>
            <li>
              Administrative, operational and field activities related to
              missing persons
            </li>
            <li>
              Department management in the absence of the Chief of the
              Department
            </li>
            <li>Producing daily and monthly reports</li>
          </ul>
        </div>
        <div
          id="second"
          className={isActive === "second" ? styles.description : styles.hidden}
        >
          <h3>
            <span className={styles.role}>Office Administrator</span>
            <span className={styles.company}>
              &nbsp;@&nbsp; Driving school Vidana
            </span>
          </h3>
          <p className={styles.range}>October 2016 - June 2017</p>
          <ul>
            <li>Client communication, business correspondence</li>
            <li>Contracts and billing</li>
            <li>Office supplies procurement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
