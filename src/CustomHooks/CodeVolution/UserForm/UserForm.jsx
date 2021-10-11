import React, { useState } from "react";

const UserForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name</label>
          <input
            value={firstName}
            type="text"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            value={lastName}
            type="text"
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
