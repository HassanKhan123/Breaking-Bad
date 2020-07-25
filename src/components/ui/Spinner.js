import React from "react";
import SpinnerImg from "../../images/spinner.gif";

function Spinner() {
  return (
    <img
      src={SpinnerImg}
      style={{ width: 200, margin: "auto", display: "block" }}
      alt=""
    />
  );
}

export default Spinner;
