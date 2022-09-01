import { useState } from "react";
import { UpdatedComponent } from "./WithCounter";
const ClickCounter = ({ name, state, incrementCount }: any) => {
  // console.log(name);

  return (
    <>
      <button onClick={incrementCount}>
        {name} Click {state} Times
      </button>
    </>
  );
};
export default UpdatedComponent(ClickCounter,2);
