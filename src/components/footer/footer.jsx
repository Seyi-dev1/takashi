import styles from "./footer.module.scss";
import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import logo from "../../assets/logo-white.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.description}>
            <p>
              Haven Offshore Bank transformed the digital banking industry using
              data and technology more than ten years ago.
            </p>
          </div>
          <div className={styles.socials}>
            <div className={styles.icon}>
              <FaFacebookF />
            </div>
            <div className={styles.icon}>
              <FaTwitter />
            </div>
            <div className={styles.icon}>
              <FaLinkedinIn />
            </div>

            <div className={styles.icon}>
              <IoMail />
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.heading}>
            <h2>Our Company</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Company and Team</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Our Services</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Contact Us</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Login</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Register</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.heading}>
            <h2>Products</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Online Payment</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Deposit</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Online Shopping</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Receive Money</p>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.icon}>
                <LiaAngleRightSolid />
              </div>
              <div className={styles.text}>
                <p>Affiliate Programme</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.subscription}>
          <div className={styles.heading}>
            <h2>Subscribe</h2>
          </div>
          <div className={styles.description}>
            <p>subscribe to our news letter to get the latest information.</p>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.button}>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rights}>
        © 2024 Haven Offshore Bank. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
