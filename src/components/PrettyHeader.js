import React from "react";
import "./PrettyHeader.css";

const PrettyHeader = ({ text }) => {
  return (
    <div className="pretty-header">
      <h1>{text}</h1>
    </div>
  );
};

export default PrettyHeader;
