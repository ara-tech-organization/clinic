import React from 'react';
import styles from './About.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section data-aos="fade-up"
      data-aos-duration="1500" className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <img src="/assets/images/about.png" alt="About Us" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>ABOUT US</h2>
        <p className={styles.paragraph}>
         <span>I’m a </span>government-certified Hematologist with a DrNB in Clinical Hematology and over 6 years of academic and patient care experience
        </p>
        <p className={styles.paragraph}>
         I specialize in the diagnosis and treatment of both benign and malignant blood disorders, including anemia, platelet abnormalities, bleeding and clotting conditions, as well as leukemia, lymphoma, and myeloma.
        </p>
          <p className={styles.paragraph}>
         I believe in combining medical precision with ethical, empathetic care — ensuring each patient receives not only the right treatment, but also the support and clarity they truly deserve.
        </p>
      </div>
    </section>
  );
};

export default About;
