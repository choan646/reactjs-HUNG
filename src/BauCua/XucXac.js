import React from "react";

export default function XucXac({ xucXac, xuLyXucXac }) {
  return (
    <div className="p-5">
      {xucXac.map((item) => (
        <img
          className="mx-3"
          width="80px"
          height="80px"
          src={item.hinhAnh}
          alt="xucxac"
        />
      ))}

      <img
        className="mt-5"
        width="100%"
        src="./img_BauCua/soc.png"
        alt="soc"
        onClick={xuLyXucXac}
      />
    </div>
  );
}
