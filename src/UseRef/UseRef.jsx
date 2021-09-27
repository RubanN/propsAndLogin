import React, { useRef } from "react";

function UseRef() {
  const textInput = useRef();
  console.log(textInput);
  const focusTextInput = () => textInput.current.focus();
  return (
    <>
      <input type="text" ref={textInput} />

      <button onClick={focusTextInput}>Focus the text</button>
    </>
  );
}

export default UseRef;
