import React from "react";
import "./option.css";

const Option = () => {
  return (
    <div className="option">
      <div className="container-border">
        <span>Quiz Settings</span>
      </div>
      <div className="container-border">
        <span>Adding Questions</span>
      </div>
      <div className="container-border">
        <span>Pricing</span>
      </div>
      <div className="container-border">
        <span>Publish</span>
      </div>
    </div>
  );
};

export default Option;
