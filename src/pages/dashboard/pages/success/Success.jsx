import { FaRegCheckCircle } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import styles from "./success.module.scss";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  const user = window.localStorage.getItem("user");
  const { transactionStatus } = JSON.parse(user);
  return transactionStatus === "success" ? (
    <div className={styles.main}>
      <FaRegCheckCircle className={styles.icon} />
      <h1>Transfer Successful</h1>
      <span>Funds are on the way.</span>
      <Link to="/dashboard" className={styles.link}>
        ← Back Home
      </Link>
    </div>
  ) : (
    <div className={styles.main}>
      <ImCancelCircle className={`${styles.icon} ${styles.failed}`} />
      <h1>Transfer Failed</h1>
      <span>
        Transfer was unsuccessful. Please contact support if problem persists.
      </span>
      <Link to="/dashboard" className={styles.link}>
        ← Back Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
