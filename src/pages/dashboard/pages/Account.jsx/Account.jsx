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
const Account = () => {
  return (
    <div className={styles.accountOverview}>
      <div className={styles.header}>
        <div className={styles.personalInfo}>
          <div className={styles.photo}>
            <img src={photo} alt="profile" />
          </div>
          <div className={styles.greeting}>
            <h2>Welcome back, Mike!</h2>
          </div>
        </div>
        <div className={styles.icon}>
          <FaUser />
        </div>
      </div>

      <div className={styles.balances}>
        <BalanceCard
          title={"Total Revenue"}
          icon={<BsCashCoin />}
          amount={"$150,000"}
          percentage="+15%"
        />
        <BalanceCard
          title={"Total Expenses"}
          icon={<BsCashCoin />}
          amount={"$50,000"}
          percentage="+15%"
        />
        <BalanceCard
          title={"Net Profit"}
          icon={<BsCashCoin />}
          amount={"$100,000"}
          percentage="+15%"
        />
        <BalanceCard
          title={"Cash Flow"}
          icon={<BsCashCoin />}
          amount={"$24,000"}
          percentage="-5%"
        />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.transactions}>
          <div className={styles.heading}>
            <h2>Recent Transactions</h2>
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
        <div className={styles.operations}>
          <OperationCard
            icon={<FaMoneyBillTransfer />}
            text={"Recieve Funds "}
          />
          <OperationCard
            icon={<FaPaperPlane />}
            text={"Transfer Funds Globally "}
          />
          <OperationCard icon={<GrTransaction />} text={"Transactions"} />
          <OperationCard icon={<IoMdSettings />} text={"Settings"} />
        </div>
      </div>
    </div>
  );
};

export default Account;
