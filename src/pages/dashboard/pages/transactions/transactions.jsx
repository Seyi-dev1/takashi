import TransactionItem from "../../../../components/transaction-item/transactionItem";
import styles from "./transactions.module.scss";

import React from "react";

const Transactions = () => {
  return (
    <div className={styles.transactions}>
      <div className={styles.table}>
        <div className={styles.heading}>
          <p>Transactions</p>
        </div>
        <div className={styles.transactionsList}>
          <TransactionItem
            title={"Electricity Bill"}
            date={"Jan 25, Checking"}
            amount={"$100"}
          />
          <TransactionItem
            title={"Electricity Bill"}
            date={"Jan 25, Checking"}
            amount={"$100"}
          />
          <TransactionItem
            title={"Electricity Bill"}
            date={"Jan 25, Checking"}
            amount={"$100"}
          />
          <TransactionItem
            title={"Electricity Bill"}
            date={"Jan 25, Checking"}
            amount={"$100"}
          />
          <TransactionItem
            title={"Electricity Bill"}
            date={"Jan 25, Checking"}
            amount={"$100"}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
