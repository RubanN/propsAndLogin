import React, { useState } from "react";

export const RenderProps = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={Increment}>CLick{count}</button>
    </div>
  );
};
