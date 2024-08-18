import styles from "./navbar.module.scss";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LOGO from "../../assets/logo.png";
import CButton from "../custom-button/CButton";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.contact_nav}>
        <div className={styles.first}>
          <span className={styles.info}>
            <FaPhone className={styles.icon} />
            +1(903)-3456-3452
          </span>
          <span className={styles.info}>
            <IoMail className={styles.icon} />
            info@heavenoffshore.com
          </span>
          <span className={styles.info}>
            <MdLocationPin className={styles.icon} />
            United States
          </span>
        </div>
        <div className={styles.second}>
          <Link className={styles.link} to="/contact">
            Support
          </Link>
          <Link className={styles.link} to="/contact">
            Help
          </Link>
          <span className={styles.info}>
            <FaGlobeAmericas className={styles.icon} />
            English
          </span>
        </div>
      </div>
      <div className={styles.main_nav}>
        <div className={styles.logo_con} onClick={() => navigate("/")}>
          <img src={LOGO} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.links}>
          <div className={styles.item}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
            >
              Home
            </NavLink>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/services"
            >
              Services
            </NavLink>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/contact"
            >
              Contact
            </NavLink>
            <span className={styles.line}></span>
          </div>
          <div className={styles.item}>
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/services"
            >
              Money Transfer
            </NavLink>
            <span className={styles.line}></span>
          </div>
        </div>
        <CButton size="big" onClick={() => navigate("/login")}>
          Login
        </CButton>
      </div>
    </div>
  );
};

export default Navbar;
