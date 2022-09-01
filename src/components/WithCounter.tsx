import React, { useState } from "react";

export const UpdatedComponent = (
  OriginalComponents: any,
  incrementNumber: number
) => {
  const NewComponent = (props: any) => {
    const [count, setCount] = useState(0);
    console.log("name", props);

    const incrementCount = () => {
      setCount(count + incrementNumber);
    };

    return (
      <OriginalComponents
        incrementCount={incrementCount}
        state={count}
        {...props}
      />
    );
  };
  return NewComponent;
};
