/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./LoginForm.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CInput from "../../../../components/CInput/CInput";
import CButton from "../../../../components/custom-button/CButton";
import {
  selectCurrentUser,
  selectError,
  selectIsLoading,
} from "../../../../redux/user/userSelector";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../../../../redux/user/userReducer";
import { BarLoader } from "react-spinners";

const LoginForm = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = React.useState(false);

  const user = useSelector((state) => selectCurrentUser(state));
  const errorSelector = createSelector([selectError], (error) => error);
  const error = useSelector((state) => errorSelector(state));
  const isLoading = useSelector((state) => selectIsLoading(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/login");
    try {
      dispatch(emailSignInStart(info));
    } catch (err) {
      navigate("/login");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  React.useEffect(() => {
    user && setTimeout(() => navigate("/dashboard/Account"), 2000);
    window.localStorage.setItem("user", JSON.stringify(user));
    window.scrollTo(0, 0);
  }, [user, navigate]);
  return (
    <div className="container">
      <div className="login-page">
        <img className="image" src={logo} alt="logo" />

        <div className="login_container">
          <div className="login_content">
            <h1 className="title">Welcome Back</h1>
            <p className="subtitle"> Login to your dashboard below.</p>
            <form className="form">
              <CInput
                type="email"
                handleChange={handleChange}
                name="email"
                value={info.email}
                required={true}
                id="email"
                label="Email"
                placeholder="name@email.com"
              />
              <div className="password">
                <CInput
                  type={passwordShown ? "text" : "password"}
                  handleChange={handleChange}
                  name="password"
                  value={info.password}
                  required={true}
                  id="password"
                  label="Password"
                  placeholder="XXXXXXX"
                />
                {passwordShown ? (
                  <AiOutlineEyeInvisible
                    onClick={togglePassword}
                    className="password-toggle"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={togglePassword}
                    className="password-toggle"
                  />
                )}
              </div>
              {isLoading ? (
                <div className="loader_con">
                  <BarLoader color="#000" margin={3} size={12} />
                </div>
              ) : (
                <CButton onClick={handleSubmit}>Sign In</CButton>
              )}
              {error === "Firebase: Error (auth/wrong-password)." && (
                <h1 className="error">wrong password!</h1>
              )}
              {error === "Firebase: Error (auth/user-not-found)." && (
                <h1 className="error">Wrong email or password</h1>
              )}
              <div className="linker_cont">
                <span className="sub">Dont have an account?</span>
                <Link to="/register" className="subtitle1">
                  Sign Up!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
