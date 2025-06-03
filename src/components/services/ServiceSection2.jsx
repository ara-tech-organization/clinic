import React from "react";
import styles from "./ServiceSection2.module.css";
import {
  FaMicroscope,
  FaSyringe,
  FaUserMd,
  FaBaby,
  FaVial,
  FaDiagnoses,
  FaFlask,
  FaNotesMedical,
} from "react-icons/fa";

const services = [
  {
    icon: FaMicroscope,
    bgColor: "#e0f7fa",
    iconColor: "#00b89f",
    title: "Anemia & Iron Disorders",
    description:
      "Evaluation and treatment of various anemias, including nutritional and bone marrow-related causes.",
    points: [
      "Iron Deficiency",
      "Complex Anemias",
      "Vitamin B12 & Folate Deficiency",
    ],
  },
  {
    icon: FaSyringe,
    bgColor: "#fce4ec",
    iconColor: "#ff6f61",
    title: "Platelet Disorders",
    description:
      "Expert diagnosis and management of platelet-related conditions.",
    points: [
      "ITP (Immune Thrombocytopenia)",
      "Other Platelet Disorders",
      "Low Platelet Counts",
    ],
  },
  {
    icon: FaNotesMedical,
    bgColor: "#fff3e0",
    iconColor: "#ff9800",
    title: "Bleeding Disorders",
    description:
      "Specialized care for hereditary and acquired bleeding conditions.",
    points: [
      "Hemophilia A & B",
      "von Willebrand Disease",
      "Easy Bruising & Bleeding",
    ],
  },
  {
    icon: FaUserMd,
    bgColor: "#e3f2fd",
    iconColor: "#007bff",
    title: "Clotting Disorders",
    description:
      "Comprehensive workup and treatment for clotting abnormalities.",
    points: [
      "Deep Vein Thrombosis (DVT)",
      "Thrombophilia",
      "Coagulation Factor Deficiencies",
    ],
  },
  {
    icon: FaBaby,
    bgColor: "#fff9c4",
    iconColor: "#ffb400",
    title: "Pediatric Hematology",
    description: "Hematology services tailored for infants and children.",
    points: [
      "Childhood Anemias",
      "Bleeding & Clotting in Children",
      "Hemoglobinopathies",
    ],
  },
  {
    icon: FaVial,
    bgColor: "#f3e5f5",
    iconColor: "#9c27b0",
    title: "Bone Marrow Evaluation",
    description:
      "Advanced testing, interpretation, and second opinions on bone marrow biopsies.",
    points: [
      "Aspiration & Biopsy",
      "Morphology Review",
      "Expert Second Opinions",
    ],
  },
  {
    icon: FaDiagnoses,
    bgColor: "#e0f2f1",
    iconColor: "#009688",
    title: "Pregnancy & Hematology",
    description: "Management of hematological issues arising during pregnancy.",
    points: [
      "Gestational Thrombocytopenia",
      "Anemia in Pregnancy",
      "Thrombosis Risk Management",
    ],
  },
  {
    icon: FaNotesMedical,
    bgColor: "#e8eaf6",
    iconColor: "#3f51b5",
    title: "Hematology Second Opinions",
    description:
      "Get expert reviews and second opinions on complex hematologic diagnoses.",
    points: [
      "Difficult Diagnoses",
      "Rare Blood Disorders",
      "Ongoing Management Advice",
    ],
  },
  {
    icon: FaFlask,
    bgColor: "#fce4ec",
    iconColor: "#e91e63",
    title: "Blood Cancers",
    description:
      "Comprehensive diagnosis and care for hematologic malignancies.",
    points: ["Leukemia", "Lymphoma", "Multiple Myeloma"],
  },
  {
    icon: FaMicroscope,
    bgColor: "#e0f2f1",
    iconColor: "#00b89f",
    title: "Chronic Blood Disorders",
    description:
      "Long-term care and monitoring of complex hematologic conditions.",
    points: [
      "Myelodysplastic Syndromes (MDS)",
      "Myeloproliferative Neoplasms (MPN)",
      "Other Chronic Anemias",
    ],
  },
  {
    icon: FaSyringe,
    bgColor: "#ede7f6",
    iconColor: "#795548",
    title: "Chemotherapy Support",
    description: "Planning and management of chemotherapy for blood cancers.",
    points: ["Chemo Planning", "Supportive Care", "Side Effect Management"],
  },
  {
    icon: FaFlask,
    bgColor: "#e0e0e0",
    iconColor: "#607d8b",
    title: "CAR-T Cell Therapy",
    description:
      "Consultation and coordination of CAR-T cell therapy and follow-up.",
    points: [
      "Eligibility & Counseling",
      "Testing & Workup",
      "Post-Treatment Follow-Up",
    ],
  },
];

const ServiceSection2 = () => {
  return (
    <section
      className={styles.servicesSection}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h2 className={styles.heading}>Provided the Best Hematology Services</h2>
      <div className={styles.cardGrid}>
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 30} // Stagger each card
            >
              <div className={styles.topRow}>
                <div
                  className={styles.iconWrapper}
                  style={{ backgroundColor: service.bgColor }}
                >
                  <IconComponent
                    className={styles.icon}
                    style={{ color: service.iconColor }}
                  />
                </div>

                <h3 className={styles.title}>{service.title}</h3>
              </div>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.points}>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection2;
