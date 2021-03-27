

//CarColor


import React, { Component } from "react";

export default class Baitap3 extends Component {
  state = {
    imgUrl: "./img/imgRedCar.jpg",  

  };
  changeColor = (color) => {
    this.setState({
        imgUrl: `./img/${color}.jpg`,
    })

  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img className="w-100" src={this.state.imgUrl} alt="Car" />
          </div>
          <div className="col-sm-6">
            <button className="btn btn-danger mx-4" onClick={this.changeColor.bind(null,"imgRedCar")}>Red</button>
            <button className="btn btn-secondary mr-4" onClick={this.changeColor.bind(null,"imgSilverCar")}>Silver</button>
            <button className="btn btn-dark" onClick={this.changeColor.bind(null,"imgBlackCar")}>Black</button>
          </div>
        </div>
      </div>
    );
  }
}
