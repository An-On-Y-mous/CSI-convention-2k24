import React, { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import {
  super_admins,
  event_heads,
  food_commitee,
} from "../../lib/login_access";
import { getDoc, getDocs, collection, query, where } from "firebase/firestore";
import Notallowed from "./status/notallowed";
import Denied from "./status/denied";
import FoodCommitee from "./levels/foodCommitee";
import EventHead from "./levels/eventHead";

const verify = () => {
  let { id } = useParams();
  id = parseInt(id);
  const [user, loading] = useAuthState(auth);
  const [isSuperAdmin, setSuperAdmin] = useState(false);
  const [isEventHead, setEventHead] = useState(false);
  const [isFoodCommittee, setFoodCommitte] = useState(false);
  const [noRecord, setNoRecord] = useState(false);

  const checkRecord = async (id) => {
    const docRef = query(
      collection(db, "convention-2k24"),
      where("id", "==", id)
    );
    const docs = await getDocs(docRef);
    let docData;
    docs.forEach((doc) => {
      if (doc.exists()) docData = doc.data();
    });
    if (docData) return true;
    else return false;
  };
  const checkPermission = async (email) => {
    if (super_admins.includes(email)) setSuperAdmin(true);
    else if (event_heads.includes(email)) setEventHead(true);
    else if (food_commitee.includes(email)) setFoodCommitte(true);
  };

  useEffect(() => {
    (async () => {
      if (await checkRecord(id)) {
        if (!loading && user) checkPermission(user.email);
      } else setNoRecord(true);
    })();
  }, [id, loading]);
  return (
    <main>
      {loading ? (
        <h1>Loading...</h1>
      ) : !user ? (
        <Notallowed />
      ) : noRecord ? (
        <Denied id={id} />
      ) : (
        <div>
          <h1>Ref. ID - {id}</h1>
          <div>{isSuperAdmin ? <h1>Admin</h1> : ""}</div>
          <div>{isEventHead ? <EventHead id={id} /> : ""}</div>
          <div>{isFoodCommittee ? <FoodCommitee id={id} /> : ""}</div>
        </div>
      )}
    </main>
  );
};

export default verify;
