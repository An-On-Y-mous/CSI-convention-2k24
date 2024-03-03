import React, { useEffect, useState } from "react";
import * as eventAccess from "../../../lib/event_access";
import { auth } from "../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Success from "../status/success";

const eventHead = (props) => {
  const [user, loading] = useAuthState(auth);
  const [accessibleEvents, setAccessibleEvents] = useState([]);
  const [eventIn, setEventIn] = useState(false);
  const [eventName, setEventName] = useState("");
  useEffect(() => {
    setAccessibleEvents([]);
    (async () => {
      for (let x in eventAccess) {
        if (eventAccess[x].includes(user.email))
          setAccessibleEvents((prevEvents) => [...prevEvents, x]);
      }
    })();
  }, [loading, user]);

  const handleEventClick = async (self) => {
    setEventName(self.target.innerHTML);
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
      {eventIn ? (
        <Success
          id={props.id}
          authBy={user}
          event={eventName}
          name={props.name}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default eventHead;
