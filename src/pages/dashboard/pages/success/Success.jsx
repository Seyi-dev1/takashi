import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./success.module.scss";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  return (
    <div className={styles.main}>
      <FaRegCheckCircle className={styles.icon} />
      <h1>Transfer Successful</h1>
      <span>Funds are on the way.</span>
      <Link to="/dashboard" className={styles.link}>
        ← Back Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
