import React, { useRef, useState, useEffect } from "react";

export default function UseRef2() {
  const [name, setName] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered{renderCount}times</div>
    </>
  );
}
