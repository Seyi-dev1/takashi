import React from "react";
import styles from "./testimonialCard.module.scss";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = ({ image, description, name, position }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={image} alt="profile" />
        </div>
        <div className={styles.quotes}>
          <ImQuotesRight />
        </div>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.name}>
        <h2>{name}</h2>
      </div>
      <div className={styles.position}>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
