import React, { Component } from "react";

export default class StateClass extends Component {
  state = {
    //Demo 1
    isLogin: false,
    //Demo 2
    count: 0,
    doubleCount: 0,
  };

  toggleLogin = () => {
    //Khong duoc thay doi state truc tiep
    //this.state.isLogin = !this.state.isLogin;
    this.setState(
      {
        isLogin: !this.state.isLogin,
      }, //Sau khi setState thanh cong se nhay vao trong callback nay
      () => {
        console.log(this.state.isLogin); //Gia tri moi cua state
      }
    );
    //Khong the lay gia tri moi sau khi setState ngay day, boi vi setState la ham bat dong bo
    console.log(this.state.isLogin); //Gia tri cu~ cua state
  };

  handleIncrement = () => {
    //C1 : Dung CallBack o tham so thu 2 de nhan gia tri moi nhat
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     this.setState({
    //       doubleCount: this.state.count * 2,
    //     });
    //   }
    // );

    //C2: Tham so dau tien nhan vao la 1 callback voi tham so laf state
    //state nay duoc dam bao luon luon la moi nhat
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });

    this.setState((state) => {
      return {
        doubleCount: state.count * 2,
      };
    });
  };
  render() {
    //Demo 1
    // if (this.state.isLogin) {
    //   return (
    //     <div>
    //       <p>Da Login</p>
    //       <button onClick={this.toggleLogin}>Dang Xuat</button>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <p>Chua Login</p>
    //     <button onClick={this.toggleLogin}>Dang Nhap</button>
    //   </div>
    // );

    //Demo 2
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>DoubleCount: {this.state.doubleCount}</p>
        <button onClick={this.handleIncrement}>Click</button>
      </div>
    );
  }
}
