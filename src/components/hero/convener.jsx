import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/assets/rrr.webp" alt="" className="convener-logo" />
          <h2 className="convener-title-name">CSI Coordinator</h2>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/senthilkumar.webp"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h3 className="convener-name"> Dr. M. Senthil Kumar</h3>

            <h3 className="convener-position">
              Head Of Department - Cyber Security{" "}
            </h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
