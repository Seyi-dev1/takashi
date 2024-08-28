import styles from "./navbar.module.scss";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LOGO from "../../assets/logo.png";
import CButton from "../custom-button/CButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.contact_nav}>
        <div className={styles.first}>
          <span className={styles.info}>
            <FaPhone className={styles.icon} />
            +1(380)710-4336
          </span>
          <span className={styles.info}>
            <IoMail className={styles.icon} />
            info@citytrustoffshorebank.com
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
        <div className={styles.btn_con}>
          <CButton size="big" onClick={() => navigate("/login")}>
            Login
          </CButton>
        </div>

        <div className={styles.mobile}>
          <span className={styles.hamburger} onClick={() => setNav(!nav)}>
            <GiHamburgerMenu className={styles.icon} />
          </span>
        </div>
      </div>
      {nav && (
        <div className={styles.mobile_nav}>
          <div className={styles.item}>
            <IoMdArrowDropright />
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              onClick={() => setNav(false)}
            >
              Home
            </NavLink>
          </div>
          <div className={styles.item}>
            <IoMdArrowDropright />
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/services"
              onClick={() => setNav(false)}
            >
              Services
            </NavLink>
          </div>
          <div className={styles.item}>
            <IoMdArrowDropright />
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/about"
              onClick={() => setNav(false)}
            >
              About
            </NavLink>
          </div>
          <div className={styles.item}>
            <IoMdArrowDropright />
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/contact"
              onClick={() => setNav(false)}
            >
              Contact
            </NavLink>
          </div>
          <div className={styles.item}>
            <IoMdArrowDropright />
            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              to="/services"
              onClick={() => setNav(false)}
            >
              Money Transfer
            </NavLink>
          </div>
          <CButton onClick={() => navigate("/login")}>Sign In</CButton>
        </div>
      )}
    </div>
  );
};

export default Navbar;
