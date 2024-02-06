import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";
import Set2 from "./set2";

const set1 = () => {
  useEffect(() => {
    document.title = "Technical Events";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Technical Events",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };
  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Technical Events</h1>
        {/* <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p> */}
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">Event-1</h2>
            <p className="software-content-description projects-close">
              <img src="/assets/bg6.webp" alt="" />
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">Event-2</h2>
            <p className="software-content-description projects-close"></p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">Event-3</h2>
            <p className="software-content-description projects-close"></p>
          </div>
        </div>

        <Set2 />
      </div>
    </React.Fragment>
  );
};

export default set1;
