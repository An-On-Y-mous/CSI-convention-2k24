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
        <h1 className="parent-software-title">Events</h1>
        {/* <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p> */}
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">TRICODE CHALLENGE</h2>
            <p className="software-content-description projects-close">
              <span className="description">DESCRIPTION: </span>
              Dive into the Tricode Challenge, an electrifying coding
              competition that pushes boundaries with a unique Tri-Language
              Challenge. Navigate coding odysseys, solve real-world problems,
              and collaborate in teams for an adrenaline-packed experience.
              Unleash your coding prowess and compete for top honors, prizes,
              and recognition.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">INNO-VATE PAPERS</h2>
            <p className="software-content-description projects-close">
              <span className="description">DESCRIPTION: </span>
              INNO-VATE PAPERS is a platform where groundbreaking research meets
              innovation. Researchers and academics are invited to present
              papers on cutting-edge topics, fostering intellectual exchange and
              technological advancements. Join us to explore the future of
              innovation through insightful papers, discussions, and networking
              opportunities.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h2 className="software-content-title">TECHSCAPE QUEST</h2>
            <p className="software-content-description projects-close">
              <span className="description">DESCRIPTION: </span>
              Embark on a thrilling expedition into the world of technology with
              TechScape Quest. This dynamic event challenges tech enthusiasts
              and innovators to navigate through diverse landscapes of coding
              challenges, emerging technologies, and problem-solving quests.
              Join us for a journey that transcends boundaries, explores the
              tech frontier, and celebrates innovation.
            </p>
          </div>

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
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default set1;
