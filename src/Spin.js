import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

function Spin() {
  const spinner = useSelector((state) => state.appReducer.loading);

  return (
    <div className="loader-styles">
      <Loader
        type="TailSpin"
        height={100}
        width={100}
        color="#00BFFF"
        visible={spinner}
      />
    </div>
  );
}

export default Spin;
