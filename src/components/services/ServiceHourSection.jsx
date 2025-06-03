// File: ServiceHoursSection.jsx
import React from "react";
import styles from "./ServiceHourSection.module.css";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const days = [
  { day: "Sunday", time: "9AM - 10PM" },
  { day: "Monday", time: "24 Hours" },
  { day: "Tuesday", time: "24 Hours" },
  { day: "Wednesday", time: "24 Hours" },
  { day: "Thursday", time: "24 Hours" },
  { day: "Saturday", time: "9AM - 10PM" },
];

const ServiceHoursSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className={styles.container}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className={styles.imageSection}>
        <img src="/clinic.avif" alt="Clinic Office" className={styles.image} />
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.title}>Services Hours</h2>
        <p className={styles.subtitle}>
          Accessible and Expert Care. Tailored to Fit Your Schedule. Discover
          Quality Healthcare on Your Terms.
        </p>
        <div className={styles.grid}>
          {days.map((item, index) => (
            <div key={index} className={styles.dayCard}>
              <FaCalendarAlt className={styles.icon} />
              <div>
                <strong>{item.day}</strong>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Plan your visit seamlessly. Book appointments with ease for
          personalized care.
        </p>
        <button className={styles.button} onClick={() => {
                navigate("/contact");
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 0);
              }}>Book Appointment</button>
      </div>
    </section>
  );
};

export default ServiceHoursSection;
