import React from 'react';
import styles from './Experience.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section data-aos="fade-up"
      data-aos-duration="1500" className={styles.experienceSection}>
      <h2 className={styles.heading}>We Aim to Provide the Best Experience</h2>
      <p className={styles.subheading}>
        At Berklinik, we're dedicated to crafting unparalleled healthcare experiences. Our mission is to provide services that redefine excellence, setting a new standard for your well-being journey.
      </p>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <h3>Personalized Wellness Plans</h3>
          <p>
            Experience care designed just for you. Our personalized wellness plans address your unique needs, empowering your journey to health.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <h3>Holistic Health Approach</h3>
          <p>
            Beyond symptoms, we focus on your holistic well-being. Our services encompass physical, mental, and emotional health.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <h3>Patient Education Empowerment</h3>
          <p>
            Empowering you with knowledge, we ensure you're an active participant in your health journey, making informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
