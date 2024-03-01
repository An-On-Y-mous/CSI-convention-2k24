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
          <h2 className="schedule-title">
            <img src="/assets/rrr.webp" alt="arrow-logo" />
            Schedule
          </h2>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h3 className="date">
                <div>
                  Feb
                  <div>
                    <div> 20</div> <div>th</div>
                  </div>
                </div>
              </h3>
              <h3 className="container-title">Registration begins</h3>
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
              <h3 className="container-title">Details verification</h3>
             
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
             
              <h3 className="container-title">Payment Confirmation</h3>
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
              <h3 className="container-title">Registration Closes</h3>
              <h3 className="date">
                <div>
                  March
                  <div>
                    <div>3</div> <div>rd</div>
                  </div>
                </div>
              </h3>
              <p className="container-description">
                As we approach the culmination of registrations, our meticulous
                process intensifies. Act swiftly before registration closing to
                ensure your participation. Secure your spot now, as this journey
                towards excellence nears its final destination
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h3 className="container-title">The Convention</h3> <br />
              <h3 className="date">
                <div>
                  March
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                </div>
              </h3>
              <p className="container-description">
                As the much-anticipated event day dawns, our meticulous planning
                unfolds. Every detail is examined to guarantee a seamless
                experience. Join us as we embark on a journey of innovation and
                excellence on this remarkable day!
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h3 className="container-title">Award Ceremony</h3>
              <h3 className="date">
                <div>
                  March
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                </div>
              </h3>
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
          <h2 className="schedule-title-mobile">
            <img src="/assets/rrr.webp" alt="arrow-logo" />
            Schedule
          </h2>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h3 className="container-title-mobile">Registration begins</h3>{" "}
              <h3 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>20</div> <div>th</div>
                  </div>
                </div>
              </h3>
              <p className="container-description-mobile">
              As we unveil the doors to an exciting event, registration
                opening initiates a meticulous process. Be part of the
                anticipation as we verify details, ensuring a smooth and
                seamless experience for your participation in this upcoming
                event
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h3 className="container-title-mobile">Details verification</h3>
             
              <p className="container-description-mobile">
              As part of our meticulous event preparation, we ensure thorough
                details verification. Your information undergoes a comprehensive
                review to guarantee accuracy, streamline logistics, and create a
                seamless experience at our upcoming event. Rest assured, your
                participation is our priority
              </p>
              <span className="circle-mobile "></span>
            </div>
            <div className="container-mobile ">
              <h3 className="container-title-mobile">Payment Confirmation</h3>
             
              <p className="container-description-mobile">
              In our commitment to a flawless event experience, payment
                confirmation undergoes rigorous scrutiny. Our meticulous process
                ensures financial transactions are accurate, providing you peace
                of mind and a seamless journey to secure your participation in
                the upcoming event
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h3 className="container-title-mobile">Registration Closes</h3>
              <h3 className="date-mobile">
                <div>
                  March
                  <div>
                    <div>3</div> <div>rd</div>
                  </div>
                </div>
              </h3>
              <p className="container-description-mobile">
              As we approach the culmination of registrations, our meticulous
                process intensifies. Act swiftly before registration closing to
                ensure your participation. Secure your spot now, as this journey
                towards excellence nears its final destination
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h3 className="container-title-mobile">The Convention</h3>{" "}
              <br />
              <h3 className="date-mobile">
                <div>
                  March
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                 
                </div>
              </h3>
              <p className="container-description-mobile">
              As the much-anticipated event day dawns, our meticulous planning
                unfolds. Every detail is examined to guarantee a seamless
                experience. Join us as we embark on a journey of innovation and
                excellence on this remarkable day!
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h3 className="container-title-mobile">Award Ceremony</h3>
              <h3 className="date-mobile">
                <div>
                  March
                  <div>
                    <div>6</div> <div>th</div>
                  </div>
                </div>
              </h3>
              <p className="container-description-mobile">
              As the pinnacle of our event, the award ceremony marks the
                culmination of meticulous planning. Every detail is scrutinized
                to ensure a flawless celebration of excellence. Join us in
                honoring outstanding achievements on this grand occasion!
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
