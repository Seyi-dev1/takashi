import styles from "./account.module.scss";
import photo from "../../../../assets/client-3.jpg";
import { FaUser } from "react-icons/fa";
import BalanceCard from "../../../../components/balanceCard/balanceCard";
import { BsCashCoin } from "react-icons/bs";
import TransactionItem from "../../../../components/transaction-item/transactionItem";
import OperationCard from "../../../../components/operation-card/operationCard";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { onSnapshot, doc } from "firebase/firestore";
import { database } from "../../../../firebase/firebase.utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const user = window.localStorage.getItem("user");
  const {
    firstName,
    fixedDeposit,
    savingsAccount,
    checkingBalance,
    id,
    withdrawals,
  } = JSON.parse(user);
  const totalBalance = Number(fixedDeposit + savingsAccount + checkingBalance);
  useEffect(() => {
    const unsub = onSnapshot(doc(database, `/users/${id}`), (doc) => {
      console.log("Current data: ", doc.data());
      const profile = doc.data();
      const updatedData = {
        id: id,
        ...profile,
      };
      console.log(updatedData);
      window.localStorage.setItem("user", JSON.stringify(updatedData));
    });
    return () => {
      unsub();
    };
  });
  console.log(user);
  return (
    <div className={styles.accountOverview}>
      <div className={styles.header}>
        <div className={styles.personalInfo}>
          <div className={styles.photo}>
            <img src={photo} alt="profile" />
          </div>
          <div className={styles.greeting}>
            <h2>Welcome back, {firstName}!</h2>
          </div>
        </div>
        <div
          className={styles.icon}
          onClick={() => navigate("/dashboard/settings")}
        >
          <FaUser />
        </div>
      </div>

      <div className={styles.balances}>
        <BalanceCard
          title={"Total Balance"}
          icon={<BsCashCoin />}
          amount={totalBalance}
          percentage="+15%"
        />
        <BalanceCard
          title={"Checking Account"}
          icon={<BsCashCoin />}
          amount={checkingBalance}
          percentage="+15%"
        />
        <BalanceCard
          title={"Savings"}
          icon={<BsCashCoin />}
          amount={savingsAccount}
          percentage="+15%"
        />
        <BalanceCard
          title={"Fixed Deposit"}
          icon={<BsCashCoin />}
          amount={fixedDeposit}
          percentage="-5%"
        />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.transactions}>
          <div className={styles.heading}>
            <h2>Recent Transactions</h2>
          </div>
          <div className={styles.transactionsList}>
            {withdrawals.map((data) => (
              <TransactionItem
                key={data.accountNumber}
                title={data.desc}
                date={data?.date}
                amount={data.amount}
              />
            ))}
          </div>
        </div>
        <div className={styles.operations}>
          <div onClick={() => navigate("/dashboard")}>
            <OperationCard
              icon={<FaMoneyBillTransfer />}
              text={"Recieve Funds "}
            />
          </div>
          <div onClick={() => navigate("/dashboard/transfer")}>
            <OperationCard
              icon={<FaPaperPlane />}
              text={"Transfer Funds Globally "}
            />
          </div>
          <div onClick={() => navigate("/dashboard/transactions")}>
            <OperationCard icon={<GrTransaction />} text={"Transactions"} />
          </div>
          <div onClick={() => navigate("/dashboard/settings")}>
            <OperationCard icon={<IoMdSettings />} text={"Settings"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
