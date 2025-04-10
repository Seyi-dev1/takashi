/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./dashboard.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { adminAuthenticated } from "../../../redux/user/userReducer";

const UserCard = ({ user, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <h3>{user.fullname}</h3>
    <p>Email: {user.email}</p>
    <p data-status={user.approved === "verified" ? "Verified" : "Unverified"}>
      Status:{" "}
      <span>{user.suspend === "suspend" ? "Suspended" : "Unsuspended"}</span>
    </p>
  </div>
);

const Dashboard = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const allUsers = [];
      const querySnapshot = await getDocs(collection(database, "users"));
      querySnapshot.forEach((doc) => {
        allUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(allUsers);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/admin/user/${userId}`);
  };

  if (loading) {
    return <div className={styles.loading}>Loading users...</div>;
  }

  return (
    <div className={styles.main}>
      <button
        style={{
          maxWidth: "100px",
          margin: "0 1rem",
          padding: ".8rem",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(adminAuthenticated(false))}
        className={styles.walletsLink}
      >
        Sign Out
      </button>
      <h2>All Users</h2>
      <div className={styles.cardGrid}>
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => handleUserClick(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
