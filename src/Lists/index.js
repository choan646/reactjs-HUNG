import React, { Component } from "react";

class ListsClass extends Component {
  products = [
    { id: 1, name: "Iphone 12", price: 30000000 },
    { id: 2, name: "SamSung S21", price: 25000000 },
    { id: 3, name: "Xiaomi Mi 11", price: 20000000 },
  ];

  render() {
    return (
      <div>
        {this.products.map((item, index) => {
          return (
            //Han che su dung index lam key
            <p key={item.id}>
              {item.id} - {item.name} - {item.price}
            </p>
          );
        })}
      </div>
    );
  }
}
export default ListsClass;