import React, { Component, PureComponent } from "react";
//PureComponent : react sẽ tự xử lý shouldComponentUpdate cho mình, nó sẽ tự động so sánh props hoặc state với props và state mới, nếu thay đổi sẽ render lại, còn không thì sẽ k render lại
//chỉ so sánh được Primitives value(string, number, null, boolean, undefine), khi so sánh obj hoặc arr nó sẽ luôn trả về true

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: this.props.count * 1000,
    };
  }

  //Chạy sau khi props hoặc state thay đổi, chạy trước render
  // nếu return về true => chạy tiếp tục đến render
  // nếu return về false => ren sẽ không được chạy\
  //cung cấp giá trị mới của props và state
  shouldComponentUpdate(nextProps,nextState){
    //Chỉ khi nào props count thay đổi component mới được render lại
    if(nextProps.count !== this.props.count){
      return true;
    }
    return false;
  }

  //Truong hợp state của component con phụ thuộc vào props của component cha
  componentDidUpdate(preProps, preState) {
    console.log("preProps", preProps);
    console.log("props", this.props);
    if (preProps.count !== this.props.count) {
      this.setState({ total: this.props.count * 1000 });
    }
  }

  render() {
    return (
      <div>
        <p>Total: {this.state.total}</p>
      </div>
    );
  }
}
