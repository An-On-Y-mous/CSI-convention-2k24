import React from "react";
import "./delegates.css";
import {
  head_committee,
  promotional_team,
  limelight,
  event_managers,
  event_head,
  event_organizers,
  executive_committe,
} from "./index";
import { useEffect } from "react";
import Footer from "../footer/footer";

const Delegates = () => {
  useEffect(() => {
    document.title = "Delegates | CSI Convention 2024";
  });
  return (
    <React.Fragment>
      <div className="parent_main_delegates">
        <div className="parent_delegates">
          <h1>DELEGATES</h1>
          <h2>Head Committee</h2>
          <div className="obs">
            <ul>
              {head_committee.map((value, index) => (
                <div className="container_del">
                  <img src={value.image} />
                  <div>
                    <li key={index}>{value.name.toLowerCase()}</li>
                    <li key={index + 1}> {value.dept}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <h2 className="child_h2_del">Limelight</h2>
          <div className="obs">
            <ul>
              {limelight.map((value, index) => (
                <div className="container_del">
                  <img src={value.image} />
                  <div>
                    <li key={index}>{value.name.toLowerCase()}</li>
                    <li key={index + 1}> {value.dept}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <h2 className="child_h2_del">Promotional Team</h2>
          <div className="obs">
            <ul>
              {promotional_team.map((value, index) => (
                <div className="container_promotional">
                  <img src={value.image} />
                  <div>
                    <li key={index}>{value.name.toLowerCase()}</li>
                    <li key={index + 1}> {value.dept}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <h2 className="child_h2_del">Event Managers</h2>
          <div className="obs">
            <ul>
              {event_managers.map((value, index) => (
                <div className="container_del">
                  <img src={value.image} />
                  <div>
                    <li key={index}>{value.name.toLowerCase()}</li>
                    <li key={index + 1}> {value.dept}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <h2 className="child_h2_del">Event Heads</h2>
          <div className="obs">
            <ul>
              {event_head.map((value, index) => (
                <div className="container_del">
                  <img src={value.image} />
                  <div>
                    <li key={index}>{value.name.toLowerCase()}</li>
                    <li key={index + 1}> {value.dept}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <h2 className="child_h2_del">Event Organizers</h2>
          <div className="obs">
            <ul>
              {event_organizers.map((value, index) => (
                <div className="container_del">
                  <img src={value.image} />
                  <div>
                    <li key={index}>{value.name.toLowerCase()}</li>
                    <li key={index + 1}> {value.dept}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <h2 className="child_h2_del">Executive Committee</h2>
          <div className="obs">
            <ul>
              {executive_committe.map((value, index) => (
                <div className="container_del">
                  <img src={value.image} />
                  <div>
                    <li key={index}>{value.name.toLowerCase()}</li>
                    <li key={index + 1}> {value.dept}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Delegates;
