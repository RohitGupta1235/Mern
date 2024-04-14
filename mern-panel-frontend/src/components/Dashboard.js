import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../api/dashboard";
import EmployeeForm from "./EmployeeForm";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = new URLSearchParams(location.search).get("username");
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(username);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    return () => {};
  }, [username]);

  const handleLogout = () => {
    navigate("/");
  };

  const handleCreateEmployeeList = () => {
    setShowForm(true);
  };

  const styles = {
    dashboardContainer: {
      position: "relative",
    },
    buttonContainer: {
      position: "absolute",
      top: "10px",
      right: "10px",
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "5px 10px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <h2>Welcome, {username}!</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleCreateEmployeeList}>
          Create Employee List
        </button>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
      {userData && (
        <div>
          <h3>User Details</h3>
          <p>Name: {userData.name}</p>
        </div>
      )}
      {showForm && <EmployeeForm />}{" "}
    </div>
  );
};

export default Dashboard;
