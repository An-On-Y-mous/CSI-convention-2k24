import React, { useEffect } from "react";
import "./events.css";
import ReactGA from "react-ga";

const events = () => {
  const handleAbstract = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `How To reach`, //------------------------ need to change
    });
    window.open("/how-to-reach");
  };
  useEffect(() => {
    document.title = "Register";
  });
  const handleStage = (stage) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Events Stage-${stage}`,
    });
    if (stage == "1") {
      document.querySelector("#line-progress").style.width = "0%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage1-content").classList.add("active");
    }
    if (stage == "2") {
      document.querySelector("#line-progress").style.width = "25%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage2-content").classList.add("active");
    }
    if (stage == "3") {
      document.querySelector("#line-progress").style.width = "50%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage3-content").classList.add("active");
    }
    if (stage == "4") {
      document.querySelector("#line-progress").style.width = "75%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage4-content").classList.add("active");
    }
  };
  return (
    <React.Fragment>
      <div className="parent-events">
        <div className="events-progress-bar">
          <ul>
            <li onClick={() => handleStage("1")}>Stage 1</li>
            <li onClick={() => handleStage("2")}>Stage 2</li>
            <li onClick={() => handleStage("3")}>Stage 3</li>
            <li onClick={() => handleStage("4")}>Stage 4</li>
          </ul>
          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div className="events-container">
          <div className="section-content stage1-content active">
            <div className="section-format">
              {" "}
              <h1>Registration</h1>
              <p>
                🔗 Scan the QR in the poster or search www.csiconcention.site
                for registration.
                <br /> <br />
                1️⃣ It will redirect you to the respective Google forms. Kindly
                fill in the requested details.
                <br /> <br />
                2️⃣Our registration team will contact you further upon
                registration.
                <br /> <br />
                3️⃣Last date for registration is on or before the 25th of
                February 2024.
                <br /> <br />
                4️⃣The first round is free for all the teams that register for
                the event.
                <br /> <br />
                {/* 5️⃣ */}
              </p>
            </div>
          </div>
          <div className="section-content stage2-content">
            <div className="section-format">
              <h1>
                Details Verification
                {/* <span className="stage2-reference" onClick={handleAbstract}>
                  <span>click here to downlaod -</span>
                  ABSTRACT SUBMISSION REFERENCE
                </span> */}
              </h1>
              <p>
                1️⃣ Our registration team will contact you in a couple of days
                post registration
                <br />
                <br />
                2️⃣ Kindly check all your personal details including name and
                contact information
                <br />
                <br />
                3️⃣ Be cautious about the details given as it may reflect in
                certification procedures.
                <br />
                <br />
                4️⃣ Please provide alternate mobile number and email-ID for
                reaching out.
                <br />
                <br />
                5️⃣ Please inform the registration team in case of accomadation
                requirement.
                <br />
                <br />
                6️⃣ Feel free to communicate with the registration team for
                further query.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="section-content stage3-content">
            <div className="section-format">
              <h1>Payment Confirmation</h1>
              <p>
                1️⃣ Further upon completion of detail verification procedure, you
                will be forwarded to payment verification for the event.
                <br />
                <br />
                2️⃣ Please note that you will be asked to pay only via call
                through the registration team.
                <br />
                <br />
                3️⃣ You will be offered multiple payment gateways to complete the
                transaction.
                <br />
                <br />
                4️⃣ After the payment is successful, kindly send the screenshot
                of the payment via whatsapp to the registration team.
                <br />
                <br />
                5️⃣ Kindly check your mail for payment confirmation receipt and
                your ID number.
                <br />
                <br />
                <span className="font-bold">NOTE:</span> Don't misplace your Id
                number. The confirmation mail will be viewed at the time of the
                event.
                <br />
                Hence without the confirmation mail and Id number you will
                unable to attend the event.
                <br />
                <h1 className="fee">Registration Fee</h1>
                <p className="amount">
                  💵 For CSI-Members = 200/person
                  <br />
                  💵 For Non CSI-Members = 300/person
                  <br />
                  <br />
                </p>
              </p>
            </div>
          </div>
          <div className="section-content stage4-content">
            <div className="section-format">
              <h1>The Convention</h1>
              <p>
                1️⃣ Arrive at the destination (SRM VEC) on or before 8:30 AM on
                the day of the event.
                <br />
                <br />
                2️⃣ Please make sure that you have your college ID card and a
                Government ID for proof.
                <br />
                <br />
                3️⃣ Lunch & Refreshments will be provided by the event
                organization for all participants.
                <br />
                <br />
                4️⃣ The First round will be conducted in the morning session.
                <br />
                <br />
                5️⃣ The final round will be conducted in the afternoon session.
                <br />
                <br />
                6️⃣ The winners will receive cash prizes in the evening session.
                <br />
                <br />
                7️⃣ The Certificates will be sent via courier within a month.
                <br />
                <br />
                <span className="text-3xl">🚧</span> Dress Code - Formals is
                only allowed for the events.
                <br />
                <br />
                <span className="text-4xl">🚁</span>Transportation services will
                not be provided by the college. Public Transportation is
                advised.
                <span className="stage2-reference" onClick={handleAbstract}>
                  <span>
                    {" "}
                    <br />
                    click here to know how to reach the destination
                  </span>
                </span>
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default events;
