/* eslint-disable react/prop-types */
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import styles from "./shopping.module.scss";
import CButton from "../custom-button/CButton";
import IMAGE from "../../assets/shopping-1.png";
const Shopping = () => {
  return (
    <div className={styles.main}>
      <div className={styles.info_con}>
        <span className={styles.intro}>Online Shopping</span>
        <span className={styles.big}>We are innovative and digital</span>
        <span className={styles.desc}>
          City Trust Offshore Bank transformed the credit card business using
          data and technology more than ten years ago. We are now one of the
          largest digital banking providers, dedicated to innovating,
          simplifying, and humanizing banking.
        </span>
        <div className={styles.list}>
          <span className={styles.item}>
            <IoCheckmarkDoneOutline className={styles.icon} />
            Open Account
          </span>
          <span className={styles.item}>
            <IoCheckmarkDoneOutline className={styles.icon} />
            Verify Account
          </span>
          <span className={styles.item}>
            <IoCheckmarkDoneOutline className={styles.icon} />
            Connect Your Account
          </span>
        </div>
        <CButton type="light">Signup Today</CButton>
      </div>
      <div className={styles.img_con}>
        <img src={IMAGE} alt="about" className={styles.image} />
      </div>
    </div>
  );
};

export default Shopping;
