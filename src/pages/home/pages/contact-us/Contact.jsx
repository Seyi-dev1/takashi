import { IoIosCall, IoIosPin } from "react-icons/io";
import styles from "./contact.module.scss";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className={styles.main}>
      <span className={styles.header}>
        <span>Discover</span> Thousands of Banking Solutions.
      </span>
      <div className={styles.duoCon}>
        <span className={styles.duo}>
          City Trust Offshore Bank have grown to become one of the largest
          digital banking providers, committed to inventing, simplifying, and
          humanizing the banking experience.
        </span>
        <div className={styles.duo}>
          City Trust Offshore Bank transformed the credit card business using
          data and technology more than ten years ago. We are now one of the
          largest digital banking providers, dedicated to innovating,
          simplifying, and humanizing banking.
        </div>
      </div>
      <div className={styles.contact}>
        <span className={styles.header2}>Request a Consultation</span>
        <form>
          <div className={styles.inputCon}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className={styles.input}
              type="text"
              name="location"
              placeholder="Location"
            />
          </div>
          <textarea
            className={styles.textArea}
            placeholder="Request details"
          ></textarea>
          <button className={styles.btn}>Submit Request</button>
        </form>
      </div>
      <div className={styles.details}>
        <div className={styles.item}>
          <IoIosPin className={styles.icon} />
          <div className={styles.second}>
            <span className={styles.title}>Our Location</span>
            <span className={styles.desc}>
              63552 E Speer Blvd Denver, CO, USA
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <IoIosCall className={styles.icon} />
          <div className={styles.second}>
            <span className={styles.title}>Email Us</span>
            <span className={styles.desc}>
              support@citytrustoffshorebank.com
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <IoMail className={styles.icon} />
          <div className={styles.second}>
            <span className={styles.title}>Call Us</span>
            <span className={styles.desc}>+1(380)710-4336</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
