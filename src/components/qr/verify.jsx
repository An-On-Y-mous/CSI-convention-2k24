import React, { useState, useEffect } from "react";
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import {
  super_admins,
  event_heads,
  food_commitee,
} from "../../lib/login_access";

const verify = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const [isSuperAdmin, setSuperAdmin] = useState(false);
  const [isEventHead, setEventHead] = useState(false);
  const [isFoodCommittee, setFoodCommitte] = useState(false);

  const checkPermission = (email) => {
    if (super_admins.includes(email)) setSuperAdmin(true);
    if (event_heads.includes(email)) setEventHead(true);
    if (food_commitee.includes(email)) setFoodCommitte(true);
  };

  useEffect(() => {
    if (!loading && user) checkPermission(user.email);
  });
  return (
    <main>
      {loading ? <h1> Loading...</h1> : ""}
      <div>{isSuperAdmin ? <h1>Admin</h1> : ""}</div>
      <div>{isEventHead ? <h1> Events</h1> : ""}</div>
      <div>{isFoodCommittee ? <h1>Lunch Token</h1> : ""}</div>
    </main>
  );
};
export default verify;
