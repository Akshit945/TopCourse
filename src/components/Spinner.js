import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* <div className="spinner loader"></div> */}
      <span className="loader"></span>
      <p className="text-bgDark text-lg font-semibold">Loading....</p>
    </div>
  );
};

export default Spinner;
