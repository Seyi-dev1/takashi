import styles from "./operationard.module.scss";

import React from "react";

const OperationCard = ({ text, icon }) => {
  return (
    <div className={styles.operationCard}>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default OperationCard;
