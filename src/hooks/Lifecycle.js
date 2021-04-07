import React, { useState, useEffect } from "react";

export default function Lifecycle() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  //Tương đương componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("Chay sau khi render");
    console.log("count : ", count);
  });

  //Tuong Duong componentDidMount, chi chay 1 lan sau khi render
  //Tham so thu 2 laf 1 array rong~ []
  useEffect(() => {
    console.log("Chay 1 lan sau khi render");

    //Khi useEffect co return ve 1 function, function nay duoc chay truoc khi component bi huy, tuong duong componentWillUnmount
    //Chi nen return ben trong useEffect co tham so thu 2 la 1 array rong~ []
    return () => {
      console.log("Chay truoc khi component bi huy");
    };
  }, []);

  //Tương đương componentDidMount + componentDidUpdate
  //Chi chay lai sau khi render voi dieu kien gia tri của biến count thay đổi
  useEffect(() => {
    console.log("giá trị count thay đổi: ", count);
  }, [count]);

  return (
    <div>
      <h3>Demo Count</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      
      <h3>Demo Count 1</h3>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Click</button>
    </div>
  );
}
