import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import ReactGA from "react-ga";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import VanillaTilt from "vanilla-tilt";
import Agenda from "./agenda";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import { Footer } from "../";
import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";

const hero = () => {
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("/register");
  };
  const handleCardClicks = (card) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${card}`,
    });
    window.open(`${card}`, "_self");
  };
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleCountdown = () => {
    const countDate = new Date("March 6, 2024 08:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    {
      if (now > countDate) return;
    }
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var textDay = Math.floor(diff / day);
    var textHour = Math.floor((diff % day) / hour);
    var textMinute = Math.floor((diff % hour) / minute);
    var textSecond = Math.floor((diff % minute) / second);

    if (textDay.toString().length == 1) {
      textDay = `0${textDay}`;
    }
    if (textHour.toString().length == 1) {
      textHour = `0${textHour}`;
    }
    if (textMinute.toString().length == 1) {
      textMinute = `0${textMinute}`;
    }
    if (textSecond.toString().length == 1) {
      textSecond = `0${textSecond}`;
    }

    setCountdown({
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  useEffect(() => {
    const tilt = VanillaTilt.init(
      document.querySelectorAll(".anim"),
      {
        max: 10,
        speed: 400,
      },
      []
    );
    const interval = setInterval(() => handleCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="parent_hero">
        {/* <div className="progress_bar"></div> */}
        <div className=" tag-hero-mobile">
          <img
            src="/images/SRMLogo.png"
            alt="srm logo"
            width="60vw"
            className="hero-srm-logo"
          />
          <div className="tag">
            <div>
              <div>Celebrating 5 Years</div>
              {/* <span>th</span> */}
            </div>
            of CSI at SRMVEC
          </div>
          <img
            src="/images/SRMVEC-logo.png"
            alt="srmvec logo"
            width="60vw"
            className="hero-srmvec-logo"
          />
        </div>

        {/* ----------------------- Page 1 ------------------------- */}
        <section className="column">
          <div className="left_side">
            <div className="curve"></div>
            <div className="prt_title">
              <div className="kpm_img_mobile">
                <img
                  src="/images/csi-kpm.png"
                  alt=""
                  style={{ width: "115px" }}
                />
              </div>
              <div className="des">
                <h1 className="convention">
                  {" "}
                  {"Convention-"}
                  <span className="convention1">2024</span>
                </h1>
                <p className="description">
                  <span>"A Multiverse of Brilliance, Where Events</span>
                  <span> Converge for Innovation and Inspiration!"</span>
                </p>
              </div>
            </div>

            <div className="register_now" onClick={handleRegisterClick}>
              <div>
                <h3>REGISTER &nbsp; NOW</h3>
              </div>
              <div>
                {" "}
                <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 40 }} />
              </div>
            </div>
            <div className="countdown-main">
             
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3 className="day">{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>
                <div className="hour-card anim">
                  <h3 className="hours">{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>
                <div className="min-card anim">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>
                <div className="sec-card anim">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right_side">
            {/* -------------------------- Column 1 * ---------------------------------- */}
            <div className="col1 animated-div">
              <h3 className="text">
        
                  <div>
                    <h2 className="text_quint"> Quintessentials</h2>
                  </div>
           
                <Calender className="calender-icon" />
              </h3>
              <h2
                className="text2"
                onClick={() => handleCardClicks("/guidelines")}
              >
                Guidelines <ArrowRightWhite className="arrow-right-icon" />
              </h2>
              <h2
                className="text3"
                onClick={() => handleCardClicks("/howtoregister")}
              >
                How to Register <ArrowRightWhite className="arrow-right-icon" />
              </h2>
            </div>
          
            {/* -------------------------- Column 4  ---------------------------------- */}
            <div
              className="col4 animated-div"
              onClick={() =>
                window.open("https://maps.app.goo.gl/B2Htd2jCfUsWGPNF6")
              }
            >
              <h2 className="text10">
                Venue
                <Location className="location-icon" />
              </h2>
              <div className="flex flex-col">
                <h3 className="text-black pt-[1vh] text-[0.8vw] venue-text-mobile font-bold">
                  SRM Valliammai Engineering College, SRM Nagar, Kattankulathur
                </h3>
                <h3
                  className="text_venue1"
                  onClick={() => window.open('https://maps.app.goo.gl/B2Htd2jCfUsWGPNF6')}
                >
                  Geographical Ping{" "}
                  <ArrowRightBlack className="arrow-right-icon" />
                </h3>
                <div className="round"></div>
              </div>
            </div>
            {/* -------------------------- Column 3 * ---------------------------------- */}

            <div className="col3 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text7">More Details</h3>
              </div>
              <h3 className="text8" onClick={() => handleCardClicks("/events")}>
                View Events <ArrowRightBlack className="arrow-right-icon" />
              </h3>
              <h3
                className="text9"
                onClick={() => handleCardClicks("/timings")}
              >
                View Timings <ArrowRightBlack className="arrow-right-icon" />
              </h3>
            </div>
            <div className="col7 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text-delegates">Delegates</h3>
              </div>
              <h3
                className="text-delegates-obs"
                onClick={() => handleCardClicks("/delegates")}
              >
                SRMVEC CSI OB'S <ArrowRightWhite className="arrow-right-icon" />
              </h3>
            </div>
            <div></div>
            {/* -------------------------- Column 6  ---------------------------------- */}
            <div className="col6 animated-div">
              <h2 className="text13">
                Organized By
                <div className="flex justify-center items-center gap-1"></div>
              </h2>
              <div className="flex items-start justify-between flex-col">
                <h3 className="text14">
                  <span> CSI Kancheepuram Chapter</span>{" "}
                  <span> SRMVEC CSI Student Branch </span>
                </h3>
                <div className="round2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------- Page 2 -------------------------- */}
      </div>
      <div className="bg-sep"></div>
      <Agenda />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default hero;
