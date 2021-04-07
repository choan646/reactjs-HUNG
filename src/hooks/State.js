import React, { useState } from "react";

// useState Hàm tạo state trong function component
export default function State() {
  //   [Giá trị state , hàm thay đổi giá trị state ] = useState( giá trị khởi tạo)
  const [count, setCount] = useState(0);
  //Co the tao ra nhieu state bang cach goi ham useState, khong bi bo buoc trong 1 obj state nhu class component
  const [color, setColor] = useState("red");
  //State la array
  const [products, setProducts] = useState(["Iphone 12", "SamSung s21"]);
  //state la obj
  const [form, setForm] = useState({ username: "", email: "" });

  const handleIncrement = () => {
    //Ham setCount nhan vao 1 gia tri va gia tri do se duoc cap nhat cho bien count
    setCount(count + 1);
  };
  const handleChangeColor = () => {
    const colors = ["red", "green", "blue", "yellow", "black"];
    const random = Math.floor(Math.random() * 5);
    setColor(colors[random]);
  };
  const handleAddProduct = () => {
    //C1: sao chep mang products va them phan tu vao
    //   const newProducts = [...products,"Xiaomi mi10"]
    //     setProducts(newProducts);

    //C2: dung ham callback khi setProduct
    setProducts((products) => {
      return [...products, "Xiaomi mi10"];
    });
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h3>Demo Count</h3>
      <p>Count : {count}</p>
      <button onClick={handleIncrement}>Click</button>

      <h3>Demo Count</h3>
      <p>Color: {color}</p>
      <button onClick={handleChangeColor}>Click change color</button>

      <h3>Demo Product</h3>
      <p>{products.join(" , ")}</p>
      <button onClick={handleAddProduct}>Add Product</button>

      <h3>Demo Form</h3>
      <div className="form-group">
        <label>username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          className="form-control"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
