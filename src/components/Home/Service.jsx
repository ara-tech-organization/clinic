import React from "react";
import { useNavigate } from "react-router-dom"; // ← import this!
import styles from "./Service.module.css";

const services = [
  {
    icon: "🧪",
    title: "Iron Deficiency & Anemias",
    description:
      "Diagnosis and management of iron deficiency and complex anemias to restore healthy blood levels.",
    bgColor: "#fce7f3",
  },
  {
    icon: "🧬",
    title: "Platelet Disorders (ITP)",
    description:
      "Expert care for ITP and other platelet disorders to support proper blood clotting and immune health.",
    bgColor: "#e0f2fe",
  },
  {
    icon: "🩸",
    title: "Bleeding Disorders",
    description:
      "Comprehensive treatment for hemophilia, von Willebrand disease, and other bleeding conditions.",
    bgColor: "#fee2e2",
  },
];

const Service = () => {
  const navigate = useNavigate(); // ← hook to navigate

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className={styles.container}
    >
      <div className={styles.headingSection}>
        <h2 className={styles.mainHeading}>
          Our Featured <br /> Hematology Services
        </h2>
        <p className={styles.subText}>
          Specialized care for blood-related conditions by our expert
          hematologists—delivering accurate diagnosis and effective treatment.
        </p>
      </div>

      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.topRow}>
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: service.bgColor }}
              >
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
            </div>

            <p className={styles.description}>{service.description}</p>
            <button
              className={styles.button}
              onClick={() => {
                navigate("/services");
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 0);
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* 💥 Bottom button section */}
      <div className={styles.bottomCTA}>
        <button
          className={styles.bigButton}
          onClick={() => {
                navigate("/services");
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 0);
              }}
        >
          Learn More About Our Services
        </button>
      </div>
    </div>
  );
};

export default Service;
