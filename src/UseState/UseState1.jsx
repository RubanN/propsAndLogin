import React, { useState } from "react";

export const UseState1 = () => {
  const [name, setName] = useState("john");
  const changeName = () => {
    setName("ruban");
    console.log(name);
  };
  return (
    <div>
      {name}
      <button onClick={changeName}>click</button>
    </div>
  );
};
