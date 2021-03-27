import React, { Component } from "react";

export default class DataBindingClass extends Component {
  content = "hello reactjs"; //La thuoc tinh
  xuatThongTin = (name, age) => {
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    );
  };
  render() {
    let a = "Hello";
    let title = "Cybersoft";
    return (
      <div>
        <p>{a}</p>
        <p>{title}</p>
        <p>{this.content}</p>

        {this.xuatThongTin("hung", 24)}
      </div>
    );
  }
}
