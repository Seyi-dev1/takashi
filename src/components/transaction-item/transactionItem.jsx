import styles from "./transactionItem.module.scss";

import React from "react";

const TransactionItem = ({ title, date, amount }) => {
  return (
    <div className={styles.transactionItem}>
      <div className={styles.description}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.date}>
          <p>{date}</p>
        </div>
      </div>
      <div className={styles.amount}>
        <h3>${amount}</h3>
      </div>
    </div>
  );
};

export default TransactionItem;
