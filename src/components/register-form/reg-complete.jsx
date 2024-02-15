import React from "react";
import Lottie from "lottie-react";
import tick from "../../assets/verified.json";

const RegComplete = () => {
  return (
    <div className="verify-title">
      <h1>
        Registration Successful
        <Lottie
          animationData={tick}
          style={{
            height: "100px",
            width: "100px",
          }}
          loop={1}
        />
      </h1>
      <h3>Thank you for registering</h3>
    </div>
  );
};

export default RegComplete;
