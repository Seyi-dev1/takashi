import { useEffect, useState } from "react";
import TransactionItem from "../../../../components/transaction-item/transactionItem";
import styles from "./transactions.module.scss";

import { transactions } from "./transactionsData";

const Transactions = () => {
  const [transactionsList, setTransactionList] = useState(transactions);
  const user = window.localStorage.getItem("user");
  const { withdrawals } = JSON.parse(user);
  useEffect(() => {
    const handleReverse = () => {
      const newTransactions = [...transactionsList].reverse(); // Create a new array to avoid mutating state directly
      setTransactionList(newTransactions);
    };
    handleReverse();
  }, []);
  return (
    <div className={styles.transactions}>
      <div className={styles.table}>
        <div className={styles.heading}>
          <p>Transactions</p>
        </div>
        <div className={styles.transactionsList}>
          {withdrawals.map((data) => (
            <TransactionItem
              key={data.accountNumber}
              title={data.desc}
              date={data.date}
              amount={data.amount}
            />
          ))}
          {transactionsList.map((data) => (
            <TransactionItem
              key={data.accountNumber}
              title={data.desc}
              date={data.date}
              amount={data.amount}
            />
          ))}
        </div>
        <p>view more</p>
      </div>
    </div>
  );
};

export default Transactions;
