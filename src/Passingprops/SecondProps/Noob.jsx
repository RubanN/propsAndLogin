import React, { useState, useEffect } from "react";
// import PropTypes from "propTypes";
export default function Noob({ age }) {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  // const user = { age, name };
  const buttonStyle = {
    backgroundColor: dark ? "#000" : "initial",
    color: dark ? "#fff" : "initial",
  };
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        style={buttonStyle}
        onClick={() => setDark((currDark) => !currDark)}
      >
        Toggle Theme
      </button>
    </>
  );
}
// User.propTypes = {
//   age: PropTypes.number,
// };
