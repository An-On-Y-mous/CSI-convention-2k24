import React from "react";
import "./register-form.css";
import { useState, setState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Registerform = () => {
  useEffect(() => {
    document.title = "Registration";
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch("http://localhost:4444/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        department,
        year,
        college,
        number,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setRegistrationComplete(true);
        navigate("/reg-complete")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // //<----------------------START Google Sheets API--------------------------->//

  // const SPREADSHEET_ID = "1IJYTaforePk8rYqjLZl2e5IWJzhOA_sG2MYr3aZw09s";
  // const SHEET_ID = "Sheet1";

  // const { client_email, private_key } = credentials;

  // const handleOAuth = async () => {
  //   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  //   await doc.useServiceAccountAuth({
  //     client_email,
  //     private_key,
  //   });
  //   await doc.loadInfo();

  //   const sheet = doc.sheetsById[SHEET_ID];
  //   const newRow = await sheet.addRow({
  //     Name: name,
  //     Department: department,
  //     Year: year,
  //     College: college,
  //     Number: number,
  //     Email: email,
  //   });

  //   console.log("Row added:", newRow);
  // };

  // const handleSubmit = async () => {
  //   try {
  //     await handleOAuth();
  //     console.log("Data submitted successfully to Google Sheets!");
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };

  //<----------------------END Google Sheets API--------------------------->//

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
    <React.Fragment>
      <div className="parent-form-reg">
        <div className="parent-child-reg">
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <div className="form-reg">
          <h3>Registration</h3>
          {/* <.......Name.....> */}
          <div className="name-reg">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name (Ex: Gopal.L)"
              id="name"
              required
              value={name}
              onChange={(e) => handleInputchange(e)}
            />
          </div>
          {/* <.......Department.....> */}
          <div className="department-reg">
            <label>Department</label>
            <input
              type="text"
              placeholder="Department"
              id="department"
              required
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
              required
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
              required
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
              required
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
              required
              value={email}
              onChange={(e) => handleInputchange(e)}
            />
          </div>
          {/* <div className="submit-btn">
            <button onClick={() => handleSubmit()}>Submit</button>
          </div> */}
          <div>
            <button onClick={() => handleSubmit()} class="btn-17">
              <span class="text-container">
                <span class="text">submit</span>
              </span>
            </button>
          </div>
          {/* {registrationComplete && (
            <div className="registration-complete-message">
              Registration complete!
            </div>
          )} */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Registerform;
