import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="./src/assets/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Feb
                  <div>
                    <div> 02</div> <div>nd</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration begins</h2>
              <p className="container-description">
                As we unveil the doors to an exciting event, registration
                opening initiates a meticulous process. Be part of the
                anticipation as we verify details, ensuring a smooth and
                seamless experience for your participation in this upcoming
                event
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Details verification</h2>
              {/* <h1 className="date">
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                  -Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1> */}
              <p className="container-description">
                As part of our meticulous event preparation, we ensure thorough
                details verification. Your information undergoes a comprehensive
                review to guarantee accuracy, streamline logistics, and create a
                seamless experience at our upcoming event. Rest assured, your
                participation is our priority
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              {/* <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>25</div> <div>th</div>
                  </div>
                </div>
              </h1> */}
              <h2 className="container-title">Payment Confirmation</h2>
              <p className="container-description">
                In our commitment to a flawless event experience, payment
                confirmation undergoes rigorous scrutiny. Our meticulous process
                ensures financial transactions are accurate, providing you peace
                of mind and a seamless journey to secure your participation in
                the upcoming event
              </p>

              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Registration Closes</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>25</div> <div>st</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                As we approach the culmination of registrations, our meticulous
                process intensifies. Act swiftly before registration closing to
                ensure your participation. Secure your spot now, as this journey
                towards excellence nears its final destination
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">The Convention</h2> <br />
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>28</div> <div>st</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                As the much-anticipated event day dawns, our meticulous planning
                unfolds. Every detail is examined to guarantee a seamless
                experience. Join us as we embark on a journey of innovation and
                excellence on this remarkable day!"
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Award Ceremony</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                As the pinnacle of our event, the award ceremony marks the
                culmination of meticulous planning. Every detail is scrutinized
                to ensure a flawless celebration of excellence. Join us in
                honoring outstanding achievements on this grand occasion!
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="./src/assets/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration opens</h2>{" "}
              <h2 className="date-mobile">
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                {/* Registration is open for tech enthusiasts, developers, and
                problem solvers from all backgrounds. Join us for an
                exhilarating 24 hours of coding, collaboration, and competition
                as we tackle real-world challenges and develop cutting-edge
                solutions */}
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Abstract Submission</h2>
              <h1 className="date-mobile">
                {" "}
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                  -Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                {/* Submit your abstracts and be a part of the forefront of
                innovation! We invite you to share your groundbreaking ideas and
                research at our esteemed hackathon event. This is your
                opportunity to present your unique insights and solutions 🚀👩‍💻 */}
              </p>
              <span className="circle-mobile "></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Finalists Annoncements</h2>
              <h1 className="date-mobile">
                <div>
                  Sep
                  <div>
                    <div>1</div> <div>st</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                {/* Step into the limelight – the moment we've all been waiting for
                is here! We're thrilled to announce the finalists of our highly
                competitive hackathon event. After meticulous evaluation and
                deliberation, we've handpicked the most promising and innovative
                teams to move forward to the final round */}
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">Registration Closes</h2>
              <h1 className="date-mobile">
                <div>
                  Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                {/* Last call for registration! Time is running out to be a part of
                our extraordinary hackathon event. Don't miss this incredible
                opportunity to join a community of tech enthusiasts, developers,
                and innovators from around the world. Registration will close
                soon, so act fast and secure your spot */}
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Hackathon Finale</h2>{" "}
              <br />
              <h1 className="date-mobile">
                <div>
                  sep
                  <div>
                    <div>8</div> <div>th</div>
                  </div>
                  - sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                {/* Get ready for the moment of triumph – the Hackathon Finale is
                just around the corner! After an intense and exhilarating
                journey, we've arrived at the grand finale, where the most
                ingenious minds will showcase their remarkable solutions. */}
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Award Ceremony</h2>
              <h1 className="date-mobile">
                <div>
                  sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                {/* The judges deliberate, and winners are announced in various
                categories, celebrating outstanding projects, creativity, and
                teamwork. The successful conclusion of the hackathon is
                commemorated with an awards ceremony and well-deserved
                celebrations. */}
              </p>
              <span className="circle-mobile"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
