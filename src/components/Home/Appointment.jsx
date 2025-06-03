import React from "react";
import styles from "./Appointment.module.css";

const steps = [
  {
    number: "01",
    title: "Book an Appointment",
    description:
      "Use our simple online form to schedule an appointment at your convenience.",
  },
  {
    number: "02",
    title: "Consult the Doctor",
    description:
      "Meet with our specialist at the scheduled time to discuss your health concerns.",
  },
  {
    number: "03",
    title: "Follow-Up and Care",
    description:
      "Receive personalized treatment guidance and follow-up support as needed.",
  },
];

const Appointment = () => {
  return (
    <div data-aos="fade-up"
      data-aos-duration="1500" className={styles.container}>
      <h2 className={styles.heading}>How Clinic Care works?</h2>
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <div className={styles.circle}>
              <span className={styles.number}>{step.number}</span>
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>

            {/* Render arrow except for the last step */}
            {index < steps.length - 1 && (
              <div
                className={`${styles.arrow} ${
                  index % 2 === 1 ? styles.mirroredArrow : ""
                }`}
              >
                <svg
                  width="200"
                  height="60"
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 30 C30 0, 70 60, 100 30"
                    stroke="#00b89f"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="0"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#00b89f " />
                    </marker>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
