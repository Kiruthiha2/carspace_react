import React from "react";
import "./Dashboard.css"; // Import the CSS file

const Card = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
