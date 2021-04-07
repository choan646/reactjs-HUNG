import React, { useEffect, useState } from "react";

export default function useWindowResize() {
  //Neu useState nhận vào tham số là 1 function, nó sẽ chỉ chạy 1 lần duy nhất khi khởi tạo
  const [size, setSize] = useState(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setSize({
      width: innerWidth,
      height: innerHeight,
    });
  };

  //Custom hook se return ve data thay vi jsx
  return [size.width, size.height]; //Return ve array

  //return ve obj
  //return {width:...còn thiếu}
}
