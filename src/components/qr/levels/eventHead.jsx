import React, { useEffect, useState } from "react";
import * as eventAccess from "../../../lib/event_access";
import { auth } from "../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Success from "../status/success";
import apiCall from "../../../lib/apiCall";

const eventHead = (props) => {
  const [user, loading] = useAuthState(auth);
  const [accessibleEvents, setAccessibleEvents] = useState([]);
  const [eventIn, setEventIn] = useState(false);

  useEffect(() => {
    setAccessibleEvents([]);
    (async () => {
      for (let x in eventAccess) {
        if (props.superadmin)
          setAccessibleEvents((prevEvents) => [...prevEvents, x]);
        if (!props.superadmin) {
          if (eventAccess[x].includes(user.email))
            setAccessibleEvents((prevEvents) => [...prevEvents, x]);
        }
      }
    })();
  }, [loading, user]);

  const handleEventClick = (self) => {
    const eventName = self.target.innerHTML;
    apiCall(props.id, props.name, eventName, user.email);
    setEventIn(true);
  };
  return (
    <div>
      {!eventIn && accessibleEvents !== null ? (
        <ul>
          {accessibleEvents.map((event, index) => (
            <li key={index} onClick={(self) => handleEventClick(self)}>
              {event}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      {eventIn ? <Success id={props.id} name={props.name} /> : ""}
    </div>
  );
};

export default eventHead;
