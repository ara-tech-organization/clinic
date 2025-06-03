import React, { useState } from "react";
import styles from "./ConsultationInfo.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending data:", formData); // 

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/ClinicForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!data.error) {
        alert("✅ " + data.message); 
        setFormData({
          name: "",
          email: "",
          mobile: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        alert("❌ " + data.message); // 
      }
    } catch (error) {
      alert("❌ Something went wrong. Please try again."); // 
    }
  };


  return (
    <section className={styles.contactSection}>
      <div className={styles.leftContent} data-aos="fade-right">
          <h2>In-Person Consultations</h2>
        <p>Available at select private hospitals in Chennai:</p>
        <ul>
          <li>MK Nursing Home (Tondiarpet)</li>
          <li>Jyoti Hospital (Old Washermenpet)</li>
        </ul>

        <h2>Teleconsultations (Pan-India)</h2>
        <p>
          After a convenient time is confirmed, payment can be made through:
        </p>
        <ul>
          <li>
            Google Pay / PhonePe / UPI: <strong>+91 98405 36186</strong>
          </li>
          <li>
            UPI ID: <strong>dr.jaswanthini@oksbi</strong>
          </li>
        </ul>

        <h2>For Referring Doctors</h2>
        <ul>
          <li>
            Consultants and physicians can refer patients by sharing a brief
            summary and investigations via WhatsApp.
          </li>
          <li>
            Prompt feedback, follow-up, and collaborative care will be provided.
          </li>
        </ul>
      </div>

      <div className={styles.rightForm} data-aos="fade-left">
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="mobile">Your Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="date">Choose Date</label>
              <input
                type="date"
                id="date"
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="time">Choose Time Slot</label>
              <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select Time Slot</option>
                <option value="10:00-11:00">10:00 AM to 11:00 AM</option>
                <option value="11:00-12:00">11:00 AM to 12:00 PM</option>
                <option value="12:00-13:00">12:00 PM to 1:00 PM</option>
                <option value="14:00-15:00">2:00 PM to 3:00 PM</option>
                <option value="15:00-16:00">3:00 PM to 4:00 PM</option>
                <option value="16:00-17:00">4:00 PM to 5:00 PM</option>
                <option value="17:00-18:00">5:00 PM to 6:00 PM</option>
                <option value="18:00-19:00">6:00 PM to 7:00 PM</option>
                <option value="19:00-20:00">7:00 PM to 8:00 PM</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">Book an Appointment</button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default ContactSection;
