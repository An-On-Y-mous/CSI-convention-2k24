import React from "react";
import EventHead from "./eventHead";
import FoodCommitee from "./foodCommitee";
const superAdmin = () => {
  return (
    <div>
      <EventHead superadmin={true} />
      <FoodCommitee superadmin={true} />
    </div>
  );
};

export default superAdmin;
