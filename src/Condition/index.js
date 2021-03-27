import React, { Component } from "react";

export default class ConditionClass extends Component {
  isLogin = false;

  toggleLogin = () => {
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
  };

  render() {
    //Su dung if
    if (this.isLogin) {
      return (
        <div>
          <p>Da Login</p>;<button onClick={this.toggleLogin}>Dang Xuat</button>
        </div>
      );
    }
    return (
      <div>
        <p>Chua Login</p>;<button onClick={this.toggleLogin}>Dang Nhap</button>
      </div>
    );

    //Su dung toan tu bac 3
    // return (
    //     <div>
    //         {this.isLogin ? <p>Da Login</p> : <p>Chua Login</p>}
    //     </div>
    // )
  }
}

function ConditionFunction() {
  let isLogin = false;

  if (isLogin) {
    return <p>Da Dang Nhap</p>;
  }
  return <p>Chua Dang Nhap</p>;

  //Su dung toan tu bac 3
  //   return <div>{isLogin ? <p>Da Login</p> : <p>Chua Login</p>}</div>;
}
