import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set2 = () => {
  useEffect(() => {
    document.title = "Non-Technical Events";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Project - set 2",
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
        <h1 className="parent-software-title">Non-Technical Events</h1>
        <p className="projects-disclaimer"></p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">Event-1</h2>
            <p className="software-content-description projects-close projects-close"></p>
          </div>

          <div className="software-content" onClick={() => handleSoftwareView}>
            <h2 className="software-content-title">Event-2</h2>
            <p className="software-content-description projects-close"></p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">Event-3</h2>
            <p className="software-content-description projects-close"></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set2;
