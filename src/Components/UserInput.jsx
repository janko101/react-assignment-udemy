import React from "react";

const UserInput = (props) => {
  const inputStyle = {
    border: "2px solid purple",
    textAlign: "center",
    boxShadow: "0px 2px 20px purple",
    padding: "10px"
  }
  return (
    <div>
      <input type="text" style={inputStyle} onChange={props.changed} value={props.userName}/>
    </div>
  );
};

export default UserInput;
