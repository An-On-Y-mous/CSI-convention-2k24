import React from "react";
import "./delegates.css";
import { ob } from "./index";
const Delegates = () => {
  return (
    <React.Fragment>
      <div className="parent_delegates">
        <h1>DELEGATES</h1>
        <div className="obs">
          <ul>
            {ob.map((value, index) => (
              <div>
                <img src={value.image} />
                <li key={index}>{value.name}</li>
                <li key={index + 1}> {value.dept}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Delegates;
