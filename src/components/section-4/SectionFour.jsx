/* eslint-disable react/no-unescaped-entities */
import styles from "./sectionfour.module.scss";
import FEATURE1 from "../../assets/feature-icon-4.png";
import FEATURE2 from "../../assets/feature-icon-5.png";
import FEATURE3 from "../../assets/feature-icon-6.png";
const SectionFour = () => {
  return (
    <div className={styles.main}>
      <span className={styles.small}>Features</span>
      <span className={styles.header}>Payment Services Worldwide</span>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.top}>
            <img src={FEATURE1} alt="feature card" className={styles.image} />
            <span className={styles.title}>Protect Your Card</span>
          </div>
          <span className={styles.desc}>
            Your card is protected by our high end server security at all times,
            no need to worry.
          </span>
        </div>
        <div className={styles.item}>
          <div className={styles.top}>
            <img src={FEATURE2} alt="feature card" className={styles.image} />
            <span className={styles.title}>Send Money</span>
          </div>
          <span className={styles.desc}>
            With our digital platform, you may send money to relatives and
            friends all around the world.
          </span>
        </div>
        <div className={styles.item}>
          <div className={styles.top}>
            <img src={FEATURE3} alt="feature card" className={styles.image} />
            <span className={styles.title}>Online Banking</span>
          </div>
          <span className={styles.desc}>
            Our digital banking services are transparent and quick, and we're
            building a reliable network.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
