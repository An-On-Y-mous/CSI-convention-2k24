import React, { useState } from "react";
import * as eventAccess from "../../../lib/event_access";
import { auth } from "../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const eventHead = () => {
  const [user, loading] = useAuthState(auth);
  const [accessibleEvents, setAccessibleEvents] = useState([]);

  const checkPermission = async () => {
    if (user)
      for (event in eventAccess) {
        console.log(user.email);
        if (eventAccess[event].includes(user.email))
          setAccessibleEvents((prevEvents) => [...prevEvents, event]);
      }
    console.log(accessibleEvents);
  };
  return <div onClick={() => checkPermission()}>eventHead</div>;
};

export default eventHead;
