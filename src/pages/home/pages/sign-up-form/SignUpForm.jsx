/* eslint-disable react/no-unescaped-entities */
import "./SignUpForm.scss";
import CButton from "../../../../components/custom-button/CButton";
import CInput from "../../../../components/CInput/CInput";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useEffect, useState } from "react";
import {
  selectCurrentUser,
  selectError,
  selectIsLoading,
  selectSignUpDone,
} from "../../../../redux/user/userSelector";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart, signUpEnd } from "../../../../redux/user/userReducer";
import { BarLoader } from "react-spinners";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    country: "",
    accountType: "",
    pin: "",
    password: "",
    fixedDeposit: 0,
    savingsAccount: 0,
    checkingBalance: 0,
    overDraft: 0,
    withdrawals: [],
    deposits: [],
    approved: "unapproved",
    suspend: "unsuspended",
    transactionStatus: "success",
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const error = useSelector((state) => selectError(state));
  const user = useSelector((state) => selectCurrentUser(state));
  const navigate = useNavigate();
  const isLoading = useSelector((state) => selectIsLoading(state));
  const signUpDone = useSelector((state) => selectSignUpDone(state));
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputs.password.length < 8) {
      alert("passwords is too short");
      return;
    }
    dispatch(signUpStart(inputs));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  useEffect(() => {
    user?.approved && navigate("/dashboard");
    window.localStorage.setItem("user", JSON.stringify(user));
    window.scrollTo(0, 0);
  }, [user, navigate]);

  useEffect(() => {
    if (signUpDone) {
      alert("your application has been recieved and is under consideration");
      setTimeout(() => {
        dispatch(signUpEnd());
        navigate("/");
      }, 4000);
    }
  });
  return (
    <div className="container">
      <div className="signup-page">
        <img className="image" src={logo} alt="logo" />
        <div className="signup_container">
          <div className="signup_content">
            <h1 className="title">Get Started</h1>
            <p className="subtitle"> Let's start the Journey.</p>
            <form className="form">
              <CInput
                type="text"
                handleChange={handleChange}
                name="firstName"
                value={inputs.firstName}
                required={true}
                id="firstName"
                label="firstname"
                placeholder="first name"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="lastName"
                value={inputs.lastName}
                required={true}
                id="lastName"
                label="Lastname"
                placeholder="last name"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="address"
                value={inputs.address}
                required={true}
                id="address"
                label="Home Address"
                placeholder="your address"
              />
              <CInput
                type="email"
                handleChange={handleChange}
                name="email"
                value={inputs.email}
                required={true}
                id="email"
                label="Email"
                placeholder="your email"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="country"
                value={inputs.country}
                required={true}
                id="country"
                label="Country"
                placeholder="Australia"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="phone"
                value={inputs.phone}
                required={true}
                id="phone"
                label="Phone Number"
                placeholder="x-xxxx-xxxx-xxxx"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="pin"
                value={inputs.pin}
                required={true}
                id="pin"
                label="4-Digit Transaction Pin"
                placeholder="X X X X"
              />
              <div className="password">
                <CInput
                  type={passwordShown ? "text" : "password"}
                  handleChange={handleChange}
                  name="password"
                  value={inputs.password}
                  required={true}
                  id="password"
                  label="Password"
                  placeholder="password"
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
                <CButton onClick={handleSubmit} className="button">
                  Register Now
                </CButton>
              )}

              {error === "Firebase: Error (auth/email-already-in-use)." && (
                <h1 className="error">Email already in use!</h1>
              )}
              {error === "Firebase: Error (auth/network-request-failed)." && (
                <h1 className="error">
                  Check your internet connection and try agin!
                </h1>
              )}

              <div className="linker_cont">
                <span className="sub">Already have an account?</span>
                <Link to="/login" className="subtitle1">
                  Sign In!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
