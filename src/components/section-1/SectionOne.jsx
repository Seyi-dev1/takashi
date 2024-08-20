import { IoCheckmarkDoneOutline } from "react-icons/io5";
import styles from "./sectionone.module.scss";
import CButton from "../custom-button/CButton";
import IMAGE from "../../assets/about-img-1.png";
const SectionOne = () => {
  return (
    <div className={styles.main}>
      <div className={styles.img_con}>
        <img src={IMAGE} alt="about" className={styles.image} />
      </div>
      <div className={styles.info_con}>
        <span className={styles.intro}>Smart Banking</span>
        <span className={styles.big}>
          The Better Way To Save & Invest Online
        </span>
        <span className={styles.desc}>
          Your Haven Offshore Bank account is your key to unlocking a universe
          of opportunities. Whether making international payments, receiving
          funds, managing your digital business, or accessing capital, Haven
          Offshore Bank opens your business up to the world.
        </span>
        <div className={styles.list}>
          <span className={styles.item}>
            <IoCheckmarkDoneOutline className={styles.icon} />
            Cards that work all across the world.
          </span>
          <span className={styles.item}>
            <IoCheckmarkDoneOutline className={styles.icon} />
            Highest Returns on your investments.
          </span>
          <span className={styles.item}>
            <IoCheckmarkDoneOutline className={styles.icon} />
            No ATM fees. No minimum balance. No overdrafts.
          </span>
        </div>
        <CButton type="light">Get Started</CButton>
      </div>
    </div>
  );
};

export default SectionOne;
