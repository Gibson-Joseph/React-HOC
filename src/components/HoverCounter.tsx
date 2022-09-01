import React, { useState } from "react";
import { UpdatedComponent } from "./WithCounter";
const HoverCounter = ({ name, state, incrementCount }: any) => {
  return (
    <>
      <h2 onMouseOver={incrementCount}>
        {name} Hovered {state} Times
      </h2>
    </>
  );
};

export default UpdatedComponent(HoverCounter, 5);
