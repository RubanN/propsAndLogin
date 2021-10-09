import React from "react";

const ConditionalRender = () => {
  const isLoggedIn = true;
  const age = 12;
  // if (isLoggedIn) {
  //   return <div>Welcome Ruban</div>;
  // } else {
  //   return <div>Welcome Guest</div>;
  // }

  //   let message;
  //   if (isLoggedIn) {
  //     message = <h1>Welcome Ruban</h1>;
  //   } else {
  //     message = <h1>Welcome Guest</h1>;
  //   }
  //   return <div>{message}</div>;
  return (
    <>
      <div>{isLoggedIn ? <h1>Welcome Ruban</h1> : <h1>Welcome Guest</h1>}</div>
      <div>
        {age ? (
          <h1>you are not able to login</h1>
        ) : (
          <h1>if you are above 12 you can login</h1>
        )}
      </div>
    </>
  );
};

export default ConditionalRender;
