import React from "react";
import X from "../../assets/x.png";
import "./creating.css";

const Creating = () => {
  return (
    <div className="quiz-container">
      <div className="border">
        <div className="x-img">
          <img src={X} alt="X Icon" />
        </div>
      </div>
      <span className="creating">Creating Quizz</span>
    </div>
  );
};

export default Creating;
