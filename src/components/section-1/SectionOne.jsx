/* eslint-disable react/prop-types */
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import styles from "./sectionone.module.scss";
import CButton from "../custom-button/CButton";
import IMAGE from "../../assets/about-img-1.png";
import { useNavigate } from "react-router-dom";
const SectionOne = ({ desc, title }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.img_con}>
        <img src={IMAGE} alt="about" className={styles.image} />
      </div>
      <div className={styles.info_con}>
        <span className={styles.intro}>Smart Banking</span>
        <span className={styles.big}>{title}</span>
        <span className={styles.desc}>{desc}</span>
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
        <CButton type="light" onClick={() => navigate("/login")}>
          Get Started
        </CButton>
      </div>
    </div>
  );
};

export default SectionOne;
