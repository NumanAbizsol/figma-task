import React from "react";
import Profile from "../../assets/avatar.png";
import "./Navbar.css";

const MyComponent = () => {
  return (
    <div className="div-container">
      <div className="flexContainer">
        <button className="button">Switch to Student</button>
      </div>
      <p className="line"></p>

      <div className="profile-container">
        <h1 className="profile-text">
          <span className="slim-text">Hello,</span> Numan
        </h1>
        <img src={Profile} alt="Profile Logo" className="profile-img" />
      </div>
    </div>
  );
};

export default MyComponent;
