import React from 'react';
import styles from './AboutSummary.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faStethoscope, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const AboutSummary = () => {
  return (
    <section data-aos="fade-up"
      data-aos-duration="1500" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left: Content */}
        <div className={styles.textContent}>
          <h2 className={styles.name}>Dr. A. R. Jaswanthini</h2>
          <p className={styles.credentials}>MD, DrNB (Clinical Hematology)</p>
          <p className={styles.role}>Assistant Professor of Hematology</p>
          <p className={styles.institution}>
            Institute of Child Health & Hospital for Children, MMC, Chennai
          </p>

          <div className={styles.tags}>
            <span className={styles.hematologist}><FontAwesomeIcon icon={faUserMd} /> Hematologist</span>
            <span className={styles.clinician}><FontAwesomeIcon icon={faStethoscope} /> Clinician</span>
            <span className={styles.educator}><FontAwesomeIcon icon={faChalkboardTeacher} /> Educator</span>
          </div>

          <ul className={styles.experienceList}>
            <li>Over 6 years of academic and clinical experience</li>
            <li>Trained in adult and pediatric hematology at Yashoda Hospitals, Hyderabad</li>
            <li>Expertise in chemotherapy protocols and CAR-T cell therapy for hematologic malignancies</li>
            <li>Manages a wide spectrum of benign and malignant blood disorders</li>
            <li> Available for in-person and teleconsultations</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className={styles.imageWrapper}>
          <img src="/assets/images/about me.png" alt="Dr. A. R. Jaswanthini" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
