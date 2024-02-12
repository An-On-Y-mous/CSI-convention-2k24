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
            <h2 className="software-content-title">MEME-IT-UP</h2>
            <p className="software-content-description projects-close">
              <span className="description">DESCRIPTION: </span>
              Prepare for an uproarious clash of humor and creativity in
              Meme-It-Up! This event invites participants to showcase their wit
              by creating and sharing the most side-splitting memes. Engage in a
              friendly battle of laughter, explore the depths of your comedic
              genius, and compete for the title of Meme Master. Let the laughter
              commence!
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">START-UP SURGE</h2>
            <p className="software-content-description projects-close">
              <span className="description">DESCRIPTION: </span>
              Embark on a journey of entrepreneurial exploration at Startup
              Surge! This event is a platform for aspiring innovators and
              startups to showcase their groundbreaking ideas, pitch their
              ventures to a panel of experts, and compete for valuable
              resources. Join us to witness the rise of the next wave of
              disruptors and innovators in the Startup Surge. Get ready to
              ignite the entrepreneurial spark!
            </p>
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
