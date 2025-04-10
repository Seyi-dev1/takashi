import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase/firebase.utils";
import styles from "./userDetails.module.scss";
import { useSelector } from "react-redux";
import { selectIsAdminAuthenticated } from "../../../redux/user/userSelector";

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const isAdminAuth = useSelector((state) => selectIsAdminAuthenticated(state));
  if (!isAdminAuth) {
    navigate("/admin");
  }
  const sortByDate = (a, b) => {
    const dateA = new Date(a.id || a.date);
    const dateB = new Date(b.id || b.date);
    return dateB - dateA; // Sort in descending order (most recent first)
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = await getDoc(doc(database, "users", userId));
        if (userDoc.exists()) {
          const userData = { id: userDoc.id, ...userDoc.data() };
          setUser(userData);
          setEditedData(userData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleInputChange = (field, value) => {
    setEditedData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleWithdrawalStatusChange = (withdrawalId, isPending) => {
    setEditedData((prev) => ({
      ...prev,
      withdrawals: prev.withdrawals.map((w) =>
        w.id === withdrawalId ? { ...w, isPending } : w
      ),
    }));
  };

  const handleDepositStatusChange = (depositId, isPending) => {
    setEditedData((prev) => ({
      ...prev,
      deposits: prev.deposits.map((d) =>
        d.id === depositId ? { ...d, isPending } : d
      ),
    }));
  };

  const saveChanges = async () => {
    try {
      const userRef = doc(database, "users", userId);
      await updateDoc(userRef, editedData);
      setUser(editedData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back to Dashboard
      </button>
      <div className={styles.userDetails}>
        <div className={styles.header}>
          <h2>{user.fullname}</h2>
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          ) : (
            <button onClick={saveChanges}>Save Changes</button>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.mainInfo}>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Verified Status:</strong>
              {isEditing ? (
                <select
                  value={editedData.approved}
                  onChange={(e) =>
                    handleInputChange("approved", e.target.value)
                  }
                >
                  <option value="unverified">Unverified</option>
                  <option value="verified">Verified</option>
                </select>
              ) : (
                <span>{user.approved}</span>
              )}
            </p>
            <p>
              <strong>Suspended Status:</strong>
              {isEditing ? (
                <select
                  value={editedData.suspend}
                  onChange={(e) => handleInputChange("suspend", e.target.value)}
                >
                  <option value="unsuspend">Unsuspend</option>
                  <option value="suspend">suspend</option>
                </select>
              ) : (
                <span
                  data-status={
                    user.suspend === "suspend" ? "Suspended" : "Unsuspended"
                  }
                >
                  {user.suspend === "suspend" ? "Suspended" : "Unsuspended"}
                </span>
              )}
            </p>
          </div>

          <div className={styles.balances}>
            {["fixedDeposit", "checkingBalance", "savingsAccount"].map(
              (field) => (
                <div key={field} className={styles.balanceItem}>
                  <strong>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData[field]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                  ) : (
                    user[field]
                  )}
                </div>
              )
            )}
          </div>

          {/* <div className={styles.transactions}>
            <h3>Withdrawals</h3>
            <div className={styles.transactionList}>
              {user.withdrawals?.sort(sortByDate).map((withdrawal) => (
                <div key={withdrawal.id} className={styles.transaction}>
                  <p>Amount: ${withdrawal.amount}</p>
                  <p>
                    Date:{" "}
                    {new Date(withdrawal.id).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })}{" "}
                  </p>
                  {isEditing ? (
                    <select
                      value={withdrawal.isPending}
                      onChange={(e) =>
                        handleWithdrawalStatusChange(
                          withdrawal.id,
                          e.target.value === "true"
                        )
                      }
                    >
                      <option value="true">Pending</option>
                      <option value="false">Completed</option>
                    </select>
                  ) : (
                    <p>
                      Status: {withdrawal.isPending ? "Pending" : "Completed"}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <h3>Deposits</h3>
            <div className={styles.transactionList}>
              {user.deposits?.sort(sortByDate).map((deposit) => (
                <div key={deposit.id} className={styles.transaction}>
                  <p>Amount: ${deposit.amount}</p>
                  <p>
                    Date:{" "}
                    {new Date(deposit.id).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })}{" "}
                  </p>
                  {isEditing ? (
                    <select
                      value={deposit.isPending}
                      onChange={(e) =>
                        handleDepositStatusChange(
                          deposit.id,
                          e.target.value === "true"
                        )
                      }
                    >
                      <option value="true">Pending</option>
                      <option value="false">Completed</option>
                    </select>
                  ) : (
                    <p>Status: {deposit.isPending ? "Pending" : "Completed"}</p>
                  )}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
