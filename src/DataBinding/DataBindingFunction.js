import React from "react";

export default function DataBindingFunction() {
  let content = "Hello Van Hung";
  let a = "Hello";

  const xuatThongTin = (name, age) => {
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    );
  };
  return (
    <div>
      <p>{a}</p>
      <p>{content}</p>

      {xuatThongTin("Hung", 24)}
    </div>
  );
}
