import styles from "./sectiontwo.module.scss";
import SECURED from "../../assets/lock-password-svgrepo-com.svg";
import CLOUD from "../../assets/cloud-file-svgrepo-com.svg";
import STACK from "../../assets/stack-alt-svgrepo-com.svg";
import UNLIMITED from "../../assets/unlimited-svgrepo-com.svg";
import IPHONE from "../../assets/app-1.png";
const SectionTwo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.empty}>
        <img className={styles.phone} src={IPHONE} alt="iphone" />
      </div>
      <div className={styles.filled}>
        <span className={styles.header}>
          We Provide Unmatched Financial <br></br> Services & Security.
        </span>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.imageCon}>
              <img src={SECURED} alt="secured" className={styles.image} />
              <div className={styles.circle}></div>
            </div>
            <span className={styles.subheader}>Secured & Encrypted</span>
            <span className={styles.desc}>
              Using state-of-the art servers, we have guarded our servers with
              high-end SSL technology and the latest DDoS Guard to protect
              against attacks.
            </span>
          </div>
          <div className={styles.item}>
            <div className={styles.imageCon}>
              <img src={CLOUD} alt="secured" className={styles.image} />
              <div className={styles.circle}></div>
            </div>
            <span className={styles.subheader}>Reliable & Smart Platform</span>
            <span className={styles.desc}>
              Our customers perform transactions not only in local & foreign
              currencies, but major cryptocurrencies supported by the system.
            </span>
          </div>
          <div className={styles.item}>
            <div className={styles.imageCon}>
              <img src={UNLIMITED} alt="secured" className={styles.image} />
              <div className={styles.circle}></div>
            </div>
            <span className={styles.subheader}>Seamless Experience</span>
            <span className={styles.desc}>
              Stashing has never been this easy. Whether you are making payments
              or making payouts or you are simply checking up on your
              investments, navigating the platform is seamless and easy.
            </span>
          </div>
          <div className={styles.item}>
            <div className={styles.imageCon}>
              <img src={STACK} alt="secured" className={styles.image} />
              <div className={styles.circle}></div>
            </div>
            <span className={styles.subheader}>Multi Currency Accounts</span>
            <span className={styles.desc}>
              With an array of payment methods provided by the platform, you get
              multiple options to make payments and receive payouts.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
