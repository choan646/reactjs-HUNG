import React from "react";

import PhoneItem from "./PhoneItem";

export default function PhoneList() {
  return (
    <div className="bg-dark pt-1">
      <h1 className="text-center text-white mt-5">BEST SMARTPHONE</h1>
      <div className="d-flex" style={{ padding : "30px"}}>
        <PhoneItem />
        <PhoneItem />
        <PhoneItem />
        <PhoneItem />
      </div>
    </div>
  );
}
