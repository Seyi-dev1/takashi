import styles from "./settings.module.scss";
import React from "react";
import { FaUser } from "react-icons/fa6";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.profilePic}>
        <FaUser />
      </div>
      <div className={styles.email}>
        <p>bozoslai@loserpool.com</p>
      </div>
      <div className={styles.details}>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>First Name</p>
          </div>
          <div className={styles.value}>
            <p>Dominik Bozoslai</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Last Name</p>
          </div>
          <div className={styles.value}>
            <p>Arne slutt</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Nationality</p>
          </div>
          <div className={styles.value}>
            <p>Scouse</p>
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
            <p>55531128</p>
          </div>
        </div>
        <div className={styles.detailPair}>
          <div className={styles.key}>
            <p>Addres</p>
          </div>
          <div className={styles.value}>
            <p>Anfield, Loserpool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
