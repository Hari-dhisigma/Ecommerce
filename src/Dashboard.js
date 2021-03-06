import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  function session() {
    sessionStorage.clear();
  }
  return (
    <div>
      <div class="topnav">
        <Link to="/Dashboard">Dashboard</Link>
      </div>

      <div class="sidenav">
        <Link to="/Order">Orders</Link>
        <Link to="/Product">Product</Link>
        <Link to="/ProfileEdit">Profile edit</Link>
        <Link to="/" onClick={session}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
