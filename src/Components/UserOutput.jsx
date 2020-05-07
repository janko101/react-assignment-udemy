import React from "react";
import "./Styling/UserOutput.css"

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Welcome, {props.userName} !</p>
      <p>{props.children}</p>
    </div>
  );
};

export default UserOutput;
