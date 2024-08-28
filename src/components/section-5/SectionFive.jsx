import styles from "./sectionfive.module.scss";
import IMAGE from "../../assets/security-1.png";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6";
const SectionFive = () => {
  return (
    <div className={styles.main}>
      <div className={styles.info_con}>
        <span className={styles.intro}>Mobile Banking Solution</span>
        <span className={styles.big}>
          City Trust Offshore Bank Mobile App Lauching Soon
        </span>
        <span className={styles.desc}>
          24/7 accessibility: Mobile banking apps allow you to access your
          account anytime, anywhere, making it easy to check your balance,
          transfer funds, and pay bills on the go.
        </span>
        <div className={styles.btns}>
          <div className={styles.appbtn}>
            <FaAppStoreIos className={styles.icon} />
            <div className={styles.text_con}>
              <span className={styles.download_text}>Download On</span>
              <span className={styles.store_name}>App Store</span>
            </div>
          </div>
          <div className={styles.appbtn}>
            <FaGooglePlay className={styles.icon} />
            <div className={styles.text_con}>
              <span className={styles.download_text}>Download On</span>
              <span className={styles.store_name}>Google Play</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.img_con}>
        <img src={IMAGE} alt="about" className={styles.image} />
      </div>
    </div>
  );
};

export default SectionFive;
