

//CarColor

import React, { Component } from 'react'


export default class CarClass extends Component {
    state = {
        imgUrl: "./img/imgRedCar.jpg"
    };

    changeCar = (value) =>{
        // switch (value) {
        //     case 'red':
        //         this.setState({imgUrl: "./img/imgRedCar.jpg"});
        //         break;
        //     case 'silver':
        //         this.setState({imgUrl: "./img/imgSilverCar.jpg"});
        //         break;
        //     case 'black':
        //         this.setState({imgUrl: "./img/imgBlackCar.jpg"});
        //         break;
        //     default:
        //         break;
        // }

        const mapping = {
            red : "./img/imgRedCar.jpg",
            silver : "./img/imgSilverCar.jpg",
            black : "./img/imgBlackCar.jpg"
        }

        this.setState({
            imgUrl: mapping[value]
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img className="w-100" src={this.state.imgUrl} alt="Car"/>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger mr-4" onClick={() => this.changeCar("red")}>Red</button>
                        <button className="btn btn-secondary mr-4" onClick={() => this.changeCar("silver")}>Silver</button>
                        <button className="btn btn-dark" onClick={() => this.changeCar("black")}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
