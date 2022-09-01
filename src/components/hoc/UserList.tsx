import React, { useState, useEffect } from "react";
import Hoc from "./Hoc";

const UserList = ({ data }: any) => {
  let renderData = data.map((user: any) => {
    return <p key={user.id}>{user.name}</p>;
  });

  return <div>{renderData}</div>;
};
export default Hoc(UserList, "users");
