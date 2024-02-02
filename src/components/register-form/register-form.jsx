import React from "react";
import "./register-form.css";
import { useState, setState } from "react";

const Registerform = () => {
  const [name, setName] = useState(null);
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);
  const [college, setCollege] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);

  const handleInputchange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "department") {
      setDepartment(value);
    }
    if (id === "year") {
      setYear(value);
    }
    if (id === "college") {
      setCollege(value);
    }
    if (id === "number") {
      setNumber(value);
    }
    if (id === email) {
      setEmail(value);
    }
  };

  return (
    <React.Fragment>
      <div className="parent-form">
        <div className="parent-child">
          <div className="form-title">
            <h1>Registration</h1>
          </div>
          <div className="column">
            {/* <.......column1.....> */}
            <div className="column1">
              <h1>ccccc1</h1>
            </div>
            {/* <.......Form-Starting------column2.....> */}
            <div className="column2" label="col2">
              {/* <.......Name.....> */}
              <div className="form">
                <div className="name">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name (Ex: Gopal.L)"
                    id="name"
                    value={name}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......Department.....> */}
                <div className="department">
                  <label>Department</label>
                  <input
                    type="text"
                    placeholder="Department"
                    id="department"
                    value={department}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......Year.....> */}
                <div className="year">
                  <label>Year of Study</label>
                  <input
                    type="text"
                    placeholder="00000"
                    id="year"
                    value={year}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......College Name.....> */}
                <div className="college">
                  <label>College Name</label>
                  <input
                    type="text"
                    placeholder="College Name"
                    id="college"
                    value={college}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......Mobile Number.....> */}
                <div className="mbl-number">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    placeholder="0123456789"
                    id="number"
                    value={number}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......Email ID.....> */}
                <div className="Email ID">
                  <label>Email ID</label>
                  <input
                    type="text"
                    placeholder="Email ID"
                    id="email"
                    value={email}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
              </div>
              <div className="submit-btn">
                <button onClick={() => handlesubmit()}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Registerform;
