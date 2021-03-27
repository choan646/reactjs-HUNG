import React, { Component } from "react";
import Child from "./Child"

export default class Lifecycles extends Component {
  constructor(props) {
    super(props);

    console.log("Run Constructor");
    this.state = {
      count: 0,
      count1:0,
    };
  }
  increase = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  increase1 = () => {
    this.setState((state) => {
      return {
        count1: state.count1 + 1,
      };
    });
  };
  //Gọi API
  //Tương tác với DOM
  //setTimeout, setInterval
  //Chỉ chạy 1 lần duy nhất sau khi render lần đầu tiên
  componentDidMount() {
    console.log("Run ComponentDidMount");
    document.getElementById("demo").addEventListener("click",()=>{});

    this.timmer = setTimeout(()=>{},1000)
  }


//Chạy trước khi component bị hủy
//Làm những tác vụ dọn dẹp  
  componentWillUnmount(){
    document.getElementById("demo").removeEventListener("click",()=>{});

    clearTimeout(this.timer);

}


  //Chạy sau mỗi lần render, từ lần render thứ 2
  // Gọi API
  // tương tác với DOM
  // setState
  componentDidUpdate(preProps, preState) {
    console.log("Run ComponentDidUpdate");
    console.log("Gia tri trước đó : ", preProps, preState);
    console.log("Giá trị hiện tại : ", this.props, this.state);
    //Khi setState trong componentDidUpdate cần phải cài đặt điều kiện dừng dựa vào việc so sánh props và state cũ với props hoặc state mới -Tránh trường hợp bị lặp vô tận
  }

  render() {
    console.log("Run Render");
    return (
      <div>
        <h1 id="demo">Lifecycles</h1>
        <button onClick={this.increase}>Click count</button>
        <button onClick={this.increase1}>Click count1</button>

        <Child count={this.state.count}/>
      </div>
    );
  }
}
