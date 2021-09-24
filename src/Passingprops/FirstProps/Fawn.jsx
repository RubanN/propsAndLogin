import React from "react";

export default function Fawn({ skinColour, updateColour }) {
  return (
    <>
      <div style={{ color: skinColour }}>I AM THE SKIN COLOUR OF A FAWN</div>
      <button onClick={updateColour}>Update Colour</button>
    </>
  );
}
