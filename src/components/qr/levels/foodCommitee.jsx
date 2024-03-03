import React, { useState } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import Success from "../status/success";

const foodCommitee = (props) => {
  const [verified, setVerified] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [lunchTokenCount, setLunchTokenCount] = useState(0);
  const [LunchTimestamp, setLunchTimestamp] = useState("");
  const handleClick = async () => {
    const collectionRef = collection(db, "convention-2k24");
    const queryRef = query(
      collection(db, "convention-2k24"),
      where("id", "==", props.id)
    );
    const docs = await getDocs(queryRef);
    let docData;
    let docRef;
    docs.forEach((doc) => {
      docRef = doc.ref;
      docData = doc.data();
    });
    setName(docData.name);
    const options = {
      timeZone: "Asia/Kolkata",
      dateStyle: "short",
      timeStyle: "medium",
    };
    const istTime = new Date().toLocaleString("en-US", options);
    if (docData.LunchToken > 0) {
      setLunchTokenCount(docData.LunchToken);
      setLunchTimestamp(docData.LunchToken_timestamp);
      await updateDoc(docRef, {
        LunchToken_timestamp: istTime,
        LunchToken: docData.LunchToken + 1,
      });
    } else {
      await updateDoc(docRef, {
        LunchToken_timestamp: istTime,
        LunchToken: docData.LunchToken + 1,
      });
      return setSuccess(true);
    }
  };
  return (
    <div>
      {lunchTokenCount ? (
        <Success
          id={props.id}
          name={name}
          message={`${
            lunchTokenCount + 1
          } - Lunch Token is being issued. Last Lunch Token issue - ${LunchTimestamp}`}
        />
      ) : success ? (
        <Success id={props.id} name={name} />
      ) : (
        <h1 onClick={() => handleClick()}> Lunch Token</h1>
      )}
    </div>
  );
};

export default foodCommitee;
