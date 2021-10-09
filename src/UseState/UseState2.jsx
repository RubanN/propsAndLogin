import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "ruban",
  },
  {
    id: 2,
    name: "ruban",
  },
  {
    id: 3,
    name: "ruban",
  },
];
export const UseState2 = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <ul>
            <li>{id}</li>
            <li>{name}</li>

            <hr />
          </ul>
        );
      })}
    </>
  );
};
