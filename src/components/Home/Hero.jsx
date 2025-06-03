import React from "react";
import styles from "./Hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className={styles.hero + " d-flex flex-wrap align-items-center px-4 py-5"}
    >
      <div className="col-md-6">
        <h1 className={`${styles.headingHover} fw-bold display-5 mb-3`}>
          Expert hematology made easy to help you feel informed and supported
        </h1>

        <p className="text-muted mb-4">
          From mild anemia to complex coagulopathies, I diagnose, treat, and
          support you through every step of your hematology care.
        </p>
        <button
          className={`${styles.start_button} ${styles.glowButton}`}
          onClick={() => navigate("/contact")}
        >
          <i className="fas fa-stethoscope me-2"></i> Get Started
        </button>
      </div>
      <div className={`${styles.mobile} ${styles.mobileHide} col-md-6 position-relative text-center mt-4 mt-md-0`}>
        <img
          src="/assets/images/Doctor-PNG-Images.png"
          alt="Doctor"
          className={styles.heroImage}
        />
        <div
          className={
            styles.card + " shadow position-absolute p-3 bg-white rounded"
          }
        >
          <div className="d-flex align-items-center">
            <i className="fas fa-heartbeat fa-2x text-danger me-3"></i>

            <div>
              <h6 className="mb-1">Our motto</h6>
              <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                Understand. Treat. Heal.
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            styles.badge +
            " position-absolute top-0 start-50 translate-middle rounded-circle bg-white p-3"
          }
        >
          <i className="fas fa-tint fa-lg text-danger"></i>
        </div>
        <div
          className={
            styles.badge +
            " position-absolute top-50 end-0 translate-middle rounded-circle bg-white p-3"
          }
        >
          <i className="fas fa-band-aid fa-lg text-danger"></i>
        </div>
        <div
          className={
            styles.badge +
            " position-absolute bottom-0 end-50 translate-middle rounded-circle bg-white p-3"
          }
        >
          <i className="fas fa-heart fa-lg text-warning"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
