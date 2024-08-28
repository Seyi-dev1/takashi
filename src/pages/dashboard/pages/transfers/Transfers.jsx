/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styles from "./transfers.module.scss";
import { CiCircleCheck, CiCircleInfo, CiViewList } from "react-icons/ci";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withdrawalStart } from "../../../../redux/payment/withdrawalReducer";
const Transfers = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [modal, setModal] = useState(false);
  const date = new Date();
  const year = date.getFullYear();
  const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  const thisDay = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${currentMonth}-${thisDay}`;
  const user = window.localStorage.getItem("user");
  const { id } = JSON.parse(user);
  const [info, setInfo] = useState({
    user: id,
    name: "",
    amount: 0,
    address: "",
    phoneNumber: "",
    currency: "USD",
    country: "",
    bankName: "",
    routingNumber: "",
    accountNumber: "",
    sortingCode: "",
    desc: "",
    pin: "",
    date: formattedDate,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  console.log(info);
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  const [display, setDisplay] = useState({
    page: "first",
  });

  const handleDisplay = (event) => {
    const { name, value } = event.target;
    setDisplay((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (info.pin !== "1945") {
      alert("incorrect PIN");
      return;
    }
    setModal(true);
    dispatch(withdrawalStart(info));
    setTimeout(() => {
      setModal(false);
      navigate("/dashboard/success");
    }, 5000);
  };
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const thisMonth = month[d.getMonth()];
  const thisYear = d.getFullYear();
  const day = d.getDate();
  const milliseconds = d.getMilliseconds();
  return (
    <>
      {modal ? (
        <div className={styles.modal}>
          <MoonLoader color="hsla(0, 100%, 41%, 1)" size={80} />
        </div>
      ) : (
        <div className={styles.transfers}>
          {display.page === "first" && (
            <div className={styles.main}>
              <span className={styles.title}>Create Transfer</span>
              <span className={styles.small}>
                <CiViewList /> {">"} Transfer {">"}{" "}
                <span className={styles.bold}> Create Transfer</span>
              </span>
              <span className={styles.section_title}>
                <CiCircleCheck className={styles.icon} />
                Type
              </span>
              <div className={styles.container}>
                <span className={styles.medium_text}>payment method</span>
                <div className={styles.options}>
                  <span className={styles.option}>
                    <input
                      type="radio"
                      className={styles.btn}
                      id="option1"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={() => handleRadioChange("option1")}
                    />
                    <label htmlFor="option1">Wire Transfer</label>
                  </span>
                  <span className={styles.option}>
                    <input
                      type="radio"
                      className={styles.btn}
                      id="option2"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={() => handleRadioChange("option2")}
                    />
                    <label htmlFor="option2">ACH Transfer</label>
                  </span>
                  <span className={styles.option}>
                    <input
                      type="radio"
                      className={styles.btn}
                      id="option3"
                      value="option3"
                      checked={selectedValue === "option3"}
                      onChange={() => handleRadioChange("option3")}
                    />
                    <label htmlFor="option3">Book Transfer</label>
                  </span>
                </div>
              </div>
              <span className={styles.section_title}>
                <CiCircleInfo className={styles.icon} />
                Details
              </span>
              <div className={styles.container}>
                <span className={styles.medium_text}>
                  Recipient's full name
                </span>
                <input
                  type="text"
                  value={info.name}
                  name="name"
                  onChange={handleChange}
                  className={styles.input}
                />
                <span className={styles.medium_text}>Recipient's Address</span>
                <input
                  type="text"
                  value={info.address}
                  name="address"
                  onChange={handleChange}
                  className={styles.input}
                />
                <div className={styles.subCon}>
                  <div className={styles.item}>
                    <span className={styles.medium_text}>
                      Recipient's Country
                    </span>
                    <input
                      type="text"
                      value={info.country}
                      name="country"
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.item}>
                    <span className={styles.medium_text}>
                      Receiving Bank Name
                    </span>
                    <input
                      type="text"
                      value={info.bankName}
                      name="bankName"
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.item}>
                    <span className={styles.medium_text}>
                      Account Number (e.g IBAN or local bank account)
                    </span>
                    <input
                      type="text"
                      value={info.accountNumber}
                      name="accountNumber"
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.item}>
                    <span className={styles.medium_text}>
                      Routing Number (where applicable)
                    </span>
                    <input
                      type="text"
                      value={info.routingNumber}
                      name="routingNumber"
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.item}>
                    <span className={styles.medium_text}>
                      Sorting Code (where applicable)
                    </span>
                    <input
                      type="text"
                      value={info.sortingCode}
                      name="sortingCode"
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>
                <span className={styles.medium_text}>Description</span>
                <input
                  type="text"
                  value={info.desc}
                  name="desc"
                  onChange={handleChange}
                  className={styles.input}
                />
                <span className={styles.medium_text}>Amount in USD ($)</span>
                <input
                  type="number"
                  min="5"
                  max="500000"
                  value={info.amount}
                  name="amount"
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <button
                className={styles.btn}
                value="details"
                name="page"
                onClick={handleDisplay}
              >
                Create Transfer
              </button>
            </div>
          )}
          {display.page === "details" && (
            <div className={styles.details}>
              <div className={styles.title_con}>
                <span className={styles.text}>Fund Transfer Details</span>
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.one}>
                  <span>{info.name}</span>
                  <span>{info.bankName}</span>
                  <span>{info.accountNumber}</span>
                  <span>{info.address}</span>
                  <span>{info.routingNumber}</span>
                  <span>{info.country}</span>
                </div>
                <div className={styles.two}>
                  <span>Date</span>
                  <span>
                    {day} {thisMonth}, {thisYear}.
                  </span>
                  <span>
                    xrp{milliseconds}
                    {milliseconds}
                    {milliseconds}
                  </span>
                </div>
              </div>
              <div className={styles.items}>
                <span>ITEM INFO</span>
                <span>AMOUNT</span>
              </div>
              <div className={styles.item}>
                <span>Account Deposit</span>
                <div className={styles.acc_details}>
                  <span>{info.accountNumber}</span>
                  <span>${info.amount}</span>
                </div>
              </div>
              <div className={styles.total_con}>
                <span>Total</span>
                <span className={styles.big_text}>${info.amount}</span>
              </div>
              <div className={styles.pin_con}>
                <span className={styles.medium_text}>Security PIN</span>
                <input
                  type="password"
                  value={info.pin}
                  name="pin"
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.btn_con}>
                <button className={styles.btn} onClick={handleSubmit}>
                  Send Funds
                </button>
                <button
                  value="first"
                  name="page"
                  onClick={handleDisplay}
                  className={styles.btn}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Transfers;
