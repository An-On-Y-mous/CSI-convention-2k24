import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/assets/rrr.webp" alt="arrow-logo" />
            <h1 className="title-name">Agenda</h1>
          </div>
          <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "40vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <p className="agenda-des">
              In its triumphant 5th year, our SRM VEC CSI - Student Branch has
              evolved into a pinnacle of innovation and collaboration. Gathering
              tech luminaries, industry leaders, and passionate enthusiasts, the
              event continues to push boundaries. A celebration of knowledge
              exchange, CSI has become a beacon for the tech community,
              fostering connections, and inspiring attendees to navigate the
              ever-changing technological landscape with confidence.
            </p>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <h2 className="about-vision-title " id="agenda-left">
              <img
                src="/assets/vision.webp"
                alt="vision-image"
                width="300px"
                className="about-vision-image"
              />
              Vision
            </h2>
            <p className="about-vision-description" id="agenda-right">
              Our vision is to create a dynamic platform that fosters
              innovation, collaboration, and continuous learning within the tech
              community. We envision a future where our technical symposium
              serves as a catalyst for pushing the boundaries of knowledge,
              providing a space where professionals, enthusiasts, and experts
              converge to explore, discuss, and shape the cutting edge of
              technological advancements.
            </p>
          </div>
          <div className="mission">
            <h2 className="about-mission-title" id="agenda-right">
              <img
                src="/assets/target.webp"
                alt="mission-image"
                width={"250px"}
                className="about-mission-image"
              />
              Mission
            </h2>
            <p className="about-mission-description" id="agenda-left">
              Our mission is to organize an annual technical symposium that
              brings together thought leaders, industry experts, and passionate
              individuals to share insights, exchange ideas, and showcase the
              latest developments in the world of technology. We aim to empower
              participants to thrive in the ever-evolving landscape of the tech
              industry. Our commitment is to inspire, educate, and propel.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
