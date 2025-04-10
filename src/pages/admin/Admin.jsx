/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./admin.module.scss";
import Dashboard from "./dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { adminAuthenticated } from "../../redux/user/userReducer";
import { selectIsAdminAuthenticated } from "../../redux/user/userSelector";
import { useNavigate } from "react-router-dom";
// Move LoginForm outside of Admin component

const LoginForm = ({ error, formData, handleInputChange, handleSubmit }) => (
  <div className={styles.loginContainer}>
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2>Admin Area</h2>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.formGroup}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);

// Move Dashboard outside of Admin component

const Admin = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const isAdminAuth = useSelector((state) => selectIsAdminAuthenticated(state));
  // if (isAdminAuth) {
  //   // setIsAuthenticated(true);
  // }
  // Hardcoded credentials (in a real app, never store credentials in frontend code)
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username === ADMIN_USERNAME &&
      formData.password === ADMIN_PASSWORD
    ) {
      dispatch(adminAuthenticated(true));
      setError("");
      // Clear form data after successful login
      setFormData({ username: "", password: "" });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className={styles.main}>
      {isAdminAuth ? (
        <Dashboard />
      ) : (
        <LoginForm
          error={error}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Admin;
