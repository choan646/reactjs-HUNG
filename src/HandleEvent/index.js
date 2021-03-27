import React, { Component } from "react";
class EventClass extends Component {

  showMessage = () => {
    //để có thể sử dụng this ở đây, showMessage phải viết theo kiểu arrow function
    alert("hello");
  };
  showFullName = (name) => {
    alert(`Hello ${name}`);
  };
  handleChange = (event) => {
      alert(event.target.value);
  }
  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Click Message</button>
        <button onClick={() => this.showFullName("Hung")}>Click Name</button>
        <button onClick={this.showFullName.bind(null, "Hung2")}>Click name 2</button>
        
        <input onChange={this.handleChange} />
        <input onChange={(event) => this.handleChange(event)} />
      </div>
    );
  }
}


export default EventClass;
