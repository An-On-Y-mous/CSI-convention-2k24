import React from "react";
import "./register.css";
import { useState, setState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import addEntry from "../../lib/addEntry";

const register = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  var endpointUrl = "/api/register";
  if (props.id) endpointUrl = "/api/postRegister";

  useEffect(() => {
    document.title = "Registration | CSI Convention 2024";
  });
  const navigate = useNavigate();
  
  const handleSubmit = () => {
   
    setButtonDisabled(true);
    if (!name || !department || !year || !college || !number || !email) {
      alert("Fill all the details");
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
    const bodyData = {
      name,
      department,
      year,
      college,
      number,
      email,
    };
    if (props.id) {
      bodyData.id = props.id;
      bodyData.LunchToken = 0;
      addEntry(bodyData);
    }
    fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    setRegistrationComplete(true);
    navigate("/reg-complete");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const [name, setName] = useState(null);
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);
  const [college, setCollege] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [registrationComplete, setRegistrationComplete] = useState(false);

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
    if (id === "email") {
      setEmail(value);
    }
  };
  return (
    <div className="parent-register">
      <div className="main-register">
        <div className="register-container">
          <div className="register-left">
            <div className="register-left-container">
              <h2>Sign Up Now!</h2>
              <video autoPlay loop controls muted>
                <source src="/assets/gif.mp4" />
              </video>
            </div>
          </div>
          <div className="register-right">
            <h2>Let the Knowledge Venture begins!</h2>
            <div className="register-right-container">
              <div>
                <div className="register-field">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    placeholder="Gopal khan L"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......Department.....> */}
                <div className="register-field">
                  <label for="department">Department</label>
                  <input
                    type="text"
                    placeholder="CSE / IT / CYS / ECE / EEE"
                    id="department"
                    required
                    value={department}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>

                {/* <.......Year.....> */}
                <div className="register-field">
                  <label for="year">Year of Study</label>
                  <input
                    type="text"
                    placeholder="I / II / III / IV "
                    id="year"
                    required
                    value={year}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
              </div>
              <div>
                {/* <.......College Name.....> */}
                <div className="register-field">
                  <label for="college">College Name</label>
                  <input
                    type="text"
                    placeholder="SRM Valliammai Engineering College"
                    id="college"
                    required
                    value={college}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......Mobile Number.....> */}
                <div className="register-field">
                  <label for="number">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="7010373822"
                    id="number"
                    required
                    value={number}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
                {/* <.......Email ID.....> */}
                <div className="register-field">
                  <label for="email">Email ID</label>
                  <input
                    type="text"
                    placeholder="kabeemkubaam@gmail.com"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => handleInputchange(e)}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleSubmit()}
                className="btn-17"
                title="Submit Form"
                disabled={buttonDisabled}
              >
                <span class="text-container">
                  <span class="text">submit</span>
                </span>
              </button>
              {/* <h3 className="reg-close-msg">
                Pre-registration slots have reached full capacity. However,
                <span> on-spot registrations are now open.</span>{" "}
              </h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
