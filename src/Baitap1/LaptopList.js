import React from 'react'

import LaptopItem from "./LaptopItem";

export default function LaptopList() {
    return (
        <>
      <h1 className="text-center mt-5">BEST LAPTOP</h1>
      <div className="d-flex" style={{ padding : "30px"}}>
        <LaptopItem />
        <LaptopItem />
        <LaptopItem />
        <LaptopItem />
      </div>
    </>
    )
}
