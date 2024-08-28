import styles from "./settings.module.scss";
import { FaUser } from "react-icons/fa6";

const Settings = () => {
  const user = window.localStorage.getItem("user");
  const { firstName, email, lastName, country, phone, address } =
    JSON.parse(user);
  return (
    <div className={styles.settings}>
      <div className={styles.profilePic}>
        <FaUser />
      </div>
      <div className={styles.email}>
        <p>{email}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>First Name</p>
          </div>
          <div className={styles.value}>
            <p>{firstName}</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Last Name</p>
          </div>
          <div className={styles.value}>
            <p>{lastName}</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Nationality</p>
          </div>
          <div className={styles.value}>
            <p>{country}</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Account Type</p>
          </div>
          <div className={styles.value}>
            <p>Checking Account</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Phone</p>
          </div>
          <div className={styles.value}>
            <p>{phone}</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Addres</p>
          </div>
          <div className={styles.value}>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
