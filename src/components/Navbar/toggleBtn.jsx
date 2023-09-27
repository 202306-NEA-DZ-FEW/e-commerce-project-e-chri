import React from "react"
import styles from "../../styles/toggleBtn.module.css"

export default function ToggleButton({ toggle }) {
  return (
    <div className="" onClick={toggle}>
      <label className={styles.toggle} htmlFor="switch">
        <input id="switch" className={styles.input} type="checkbox" />
        <div className={styles.icon + " " + styles["icon--moon"]}>
          <svg
            height="15"
            width="15"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98A10.503 10.503 0 01-1-1c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>

        <div className={styles.icon + " " + styles["icon--sun"]}>
          <svg
            height="15"
            width="15"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.8946 .166 a .750 .750 .00 -001-.060 l -01-.591 l01-.590 a .750 .750 .00 -101-.061 l01-.591 l01-.590 z M21 .75012 a .750 .750 .00 -0112 -.750 H21 a .750 .750 .00 -0112 -.750 z M17 .83418 .894 a .750 .750 .00 -001-.060 l -01-.590 l -01-.591 a .750 .750 .00 -100 -01-.061 l01-.590 l01-.591 z M12 l18 a .750 l00 -0112 -.750 V21 a .750 l00 -0112 -.500 v -02-.250 A .750 l00 -0112 l18 z M7 l75817 l303 a .750 l00 -001-.061 l -01-.591 l01-.590 a .750 l00 -001-.060 l01-.590 l01-.591 z M6 l12 a .750 l00 -0112 -.750 H3 a .750 l00 -010 -01-.500 h02-.250 A .750 l00 -016 l12 z M6 l6977 l757 a .750 l00 -001-.060 l -01-.590 l -01-.591 a .750 l00 -001-.06160l1l590l591z"></path>
          </svg>
        </div>
      </label>
    </div>
  )
}
