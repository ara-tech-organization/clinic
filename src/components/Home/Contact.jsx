import React from "react";
import styles from "./Contact.module.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className={styles.contactContainer}
    >
      <div className={styles.contactLeft}>
        <h1>
          Let’s get
          <br />
          in touch
        </h1>
        <p className={styles.subheading}>
          Don’t be afraid to say hello with us!
        </p>

        <div className={styles.contactInfo}>
          <div className={styles.infoBlock}>
            <FiPhone className={styles.icon} />
            <div>
              <p className={styles.label}>Phone</p>
              <p className={styles.info}>+91 98405 36186</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <FiMail className={styles.icon} />
            <div>
              <p className={styles.label}>Email</p>
              <p className={styles.info}>drjaswanthini@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <FiMapPin className={styles.icon} />
            <div>
              <p className={styles.label}>Office</p>
              <p className={styles.info}>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            See on Google Map ↗
          </a> */}
        </div>
      </div>

      <div className={styles.contactRight}>
        <div className={styles.arrowText}>
          <p>
            Great! We're excited to hear from you and let’s start something
            special together.
            <br />
            Call us for any inquiry.
          </p>
        </div>

        <div className={styles.mapEmbed}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4051556643794!2d80.25435417484329!3d13.073489537251314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660cff28b88f%3A0x3f0028e54b91f1ba!2sInstitute%20Of%20Child%20Health%20and%20Hospital%20for%20Children!5e0!3m2!1sen!2sin!4v1748931762864!5m2!1sen!2sin"
            
            allowfullscreen=""
            loading="lazy"
          
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
