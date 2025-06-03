import { useState, useEffect } from "react";
import styles from "./Faq.module.css";
import {
  HelpCircle,
  ShieldCheck,
  Info,
  FileText,
  CreditCard,
  Clipboard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const faqs = [
  {
    icon: <HelpCircle size={40} />,
    question: "Do I need a referral to consult you?",
    answer:
      "No, you can directly book a consultation — both first-time visits and second opinions are welcome.",
  },
  {
    icon: <ShieldCheck size={40} />,
    question: "Can I consult for my child’s blood disorder?",
    answer:
      "Yes, I see both pediatric and adult hematology cases, including anemia, low platelets, and bleeding issues in children.",
  },
  {
    icon: <Info size={40} />,
    question: "Are teleconsultations available for patients outside Chennai?",
    answer:
      "Yes. Teleconsults are available across India through WhatsApp video/audio after confirmation and payment.",
  },
  {
    icon: <FileText size={40} />,
    question: "How do I send my reports before the appointment?",
    answer:
      "You can share photos or PDFs of your reports through WhatsApp or email them to drjaswanthini@gmail.com.",
  },
  {
    icon: <CreditCard size={40} />,
    question: "What is the mode of payment for teleconsultations?",
    answer:
      "Payments can be made via Google Pay / PhonePe / UPI to dr.jaswanthini@oksbi.",
  },
  {
    icon: <Clipboard size={40} />,
    question: "Will I receive a summary after the consultation?",
    answer:
      "Yes, a written summary or voice note with advice will be shared after your consult, if needed.",
  },
];

const DESKTOP_ITEMS = 3;

export default function FaqCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(DESKTOP_ITEMS);

  // On mount + resize, update itemsPerPage
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth <= 576) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(DESKTOP_ITEMS);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Next / Prev shift by itemsPerPage each time
  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % faqs.length);
  };
  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - itemsPerPage + faqs.length) % faqs.length
    );
  };

  // Grab exactly itemsPerPage FAQs, wrapping around
  const currentFaqs = Array.from({ length: itemsPerPage }, (_, i) => {
    return faqs[(startIndex + i) % faqs.length];
  });

  return (
    <div data-aos="fade-up"
      data-aos-duration="1500" className={styles.container}>
      <h2 className={styles.heading}>Why people like us?</h2>
      <p className={styles.subheading}>Frequently Asked Questions</p>

      <div className={styles.carouselWrapper}>
        <button
          onClick={handlePrev}
          className={styles.navBtn}
          aria-label="Previous FAQs"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.carousel}>
          {currentFaqs.map((faq, idx) => (
            <div className={styles.card} key={startIndex + idx}>
              <div className={styles.icon}>{faq.icon}</div>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={styles.navBtn}
          aria-label="Next FAQs"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
