import React from "react";
import IncrementCount from "./index";
// import Noob from "./Noob";

export default function Counter() {
  return (
    <div>
      <IncrementCount initialCount={0} />
      {/* <Noob age={25} /> */}
    </div>
  );
}
