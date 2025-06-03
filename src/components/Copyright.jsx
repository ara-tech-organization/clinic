// src/components/Copyright.jsx
import React from "react";
import styles from "./Footer.module.css";

const Copyright = () => {
  return (
    <section className={styles.copyrightSection}>
      <p>&copy; {new Date().getFullYear()} ARA Discover Technologies Pvt. Ltd. All rights reserved.</p>
    </section>
  );
};

export default Copyright;
