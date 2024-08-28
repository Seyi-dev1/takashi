import SECURITY from "../../assets/security-icon-1.png";
import SECURITY2 from "../../assets/security-icon-2.png";
import styles from "./sectionthree.module.scss";
import CButton from "../custom-button/CButton";
import IMAGE from "../../assets/security-1.png";
import { useNavigate } from "react-router-dom";
const SectionThree = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.info_con}>
        <span className={styles.intro}>Banking Security</span>
        <span className={styles.big}>
          The Safest Way To Transact Your Money Fast
        </span>
        <span className={styles.desc}>
          Our banking services focus on our clients’ most critical issues and
          opportunities: strategy, marketing, organization, operations,
          technology, transformation, digital, advanced analytics, corporate
          finance, mergers & acquisitions and sustainability across all
          industries and geographies.
        </span>
        <div className={styles.list}>
          <div className={styles.item}>
            <img src={SECURITY} alt="security" className={styles.icon} />
            <div className={styles.desc_con}>
              <span className={styles.title}>Pay Online Securely</span>
              <span className={styles.small}>
                Our digital banking services are transparent and quick, and
                we're building a reliable network.
              </span>
            </div>
          </div>
          <div className={styles.item}>
            <img src={SECURITY2} alt="security" className={styles.icon} />
            <div className={styles.desc_con}>
              <span className={styles.title}>Pay Online Securely</span>
              <span className={styles.small}>
                Our digital banking services are transparent and quick, and
                we're building a reliable network.
              </span>
            </div>
          </div>
        </div>
        <CButton type="light" onClick={() => navigate("/login")}>
          Get Started
        </CButton>
      </div>
      <div className={styles.img_con}>
        <img src={IMAGE} alt="about" className={styles.image} />
      </div>
    </div>
  );
};

export default SectionThree;
