import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove auth token
        navigate("/login"); // Redirect to login page
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <button
                onClick={handleLogout}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px"
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
