import React, { Component } from "react";
import Child from "./Child";
import Student from "./Student";
import Card from "./Card";
import SuperCard from "./SuperCard";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: "Hung", age: 24, score: 9 },
        { id: 2, name: "Hau", age: 20, score: 10 },
        { id: 3, name: "Vinh", age: 44, score: 8 },
      ],
      products: [
        { id: 1, name: "Iphone 12", price: 30000000 },
        { id: 2, name: "SamSung S21", price: 25000000 },
        { id: 3, name: "Xiaomi Mi 11", price: 20000000 },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        {/* prop-name="value" */}
        <Child message="Cybersoft" />
        <Child message="FE-62" />
        <Child message="Reactjs" />

        {/**Demo voi class */}
        {this.state.students.map((student) => {
          return <Student key={student.id} student={student} />;
        })}

        {/**Demo voi function */}
        <h1>Props function</h1>
        <div className="row">
          {this.state.students.map((student) => {
            return (
              <div key={student.id} className="col-sm-4">
                <Card student={student} />
              </div>
            );
          })}
        </div>

        {/* Demo voi prop children */}
        <h1>Su dung props children (students)</h1>
        <div className="row">
          {this.state.students.map((student) => {
            return (
              <div key={student.id} className="col-sm-4">
                <SuperCard title="Students" footer={()=>(
                    <button className="btn btn-primary">Chi tiet</button>
                )}>
                  <h3 className="text-secondary">Name: {student.name}</h3>
                  <p className="text-success">Score: {student.score}</p>
                </SuperCard>
              </div>
            );
          })}
        </div>

        <h1>Su dung props children (products)</h1>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <div key={product.id} className="col-sm-4">
                <SuperCard title="Products" footer={()=> (
                  <button className="btn btn-primary">Mua</button>
                )}>
                  <h3 className="text-secondary">Ten sp: {product.name}</h3>
                  <p className="text-success">Gia sp: {product.price}</p>
                </SuperCard>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}
