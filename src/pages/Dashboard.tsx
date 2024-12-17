// import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.module.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard/users">Users</Link>
      </nav>
    </div>
  );
}
