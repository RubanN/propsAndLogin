import React from "react";

const ConditionalRender2 = () => {
  const employees = ["max", "AB", "virat", "MS"];
  return (
    <div>
      {employees && employees.length > 0 && (
        <div>
          <h1>Employee List</h1>
          {employees.map((employee) => (
            <ul>
              <li key={employee}>{employee}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConditionalRender2;
