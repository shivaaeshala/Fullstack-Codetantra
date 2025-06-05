import React from "react";

function PropsExample(details) {
  return (
    <>
      <h2>Welcome, {details.name}</h2>
      <h2>Age: {details.age}</h2>
      <h2>College: {details.college}</h2>
    </>
  );
}

export default PropsExample;
