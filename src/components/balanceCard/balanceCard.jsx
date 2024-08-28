import styles from "./balanceCard.module.scss";

import React from "react";

const BalanceCard = ({ title, icon, amount, percentage }) => {
  return (
    <div className={styles.balanceCard}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.amount}>
        <h3>$ {amount}</h3>
      </div>
      <div
        className={
          percentage.includes("+")
            ? `${styles.percentage} ${styles.positive}`
            : `${styles.percentage} ${styles.negative}`
        }
      >
        <p>{percentage}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
