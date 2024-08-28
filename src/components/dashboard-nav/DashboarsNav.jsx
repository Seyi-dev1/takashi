import styles from "./dashboard.module.scss";
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
import { startSignOut } from "../../redux/user/userReducer";
import { useDispatch } from "react-redux";
const DashboarsNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(startSignOut());
    navigate("/");
  };
  const [nav, setNav] = useState(false);
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
              to="/dashboard"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
            >
              Account Overview
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
              to="/dashboard/transfer"
            >
              Send Funds
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
              to="/dashboard/transactions"
            >
              Transactions
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
              to="/dashboard/settings"
            >
              Settings
            </NavLink>
            <span className={styles.line}></span>
          </div>
        </div>
        <div className={styles.btn_con}>
          <CButton size="big" onClick={signOut}>
            Logout
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
              to="/dashboard"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive && "red",
                };
              }}
              onClick={() => setNav(false)}
            >
              Account Overview
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
              to="/dashboard/transfer"
              onClick={() => setNav(false)}
            >
              Send Funds
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
              to="/dashboard/transactions"
              onClick={() => setNav(false)}
            >
              Transactions
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
              to="/dashboard/settings"
              onClick={() => setNav(false)}
            >
              Settings
            </NavLink>
          </div>
          <CButton onClick={() => signOut()}>Log out</CButton>
        </div>
      )}
    </div>
  );
};

export default DashboarsNav;
