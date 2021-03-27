import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { student } = this.props;
    return (
      <div>
        <p>
          Name: {student.name} - Age: {student.age} - Score: {student.score}
        </p>
      </div>
    );
  }
}
