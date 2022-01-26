import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="home-header">no mo rocrastination</div>
      <Link to="/register" className="home-btn ">
        register{"    "}
      </Link>
      <Link to="/login" className="home-btn ">
        login
      </Link>
    </div>
  );
}
