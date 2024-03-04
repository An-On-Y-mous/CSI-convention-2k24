import React from "react";
import EventHead from "./eventHead";
import FoodCommitee from "./foodCommitee";
const superAdmin = (props) => {
  return (
    <div>
      <EventHead superadmin={true} id={props.id} name={props.name} />
      <FoodCommitee superadmin={true} id={props.id} authBy={props.authBy} />
    </div>
  );
};

export default superAdmin;
