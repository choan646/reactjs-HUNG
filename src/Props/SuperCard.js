import React, { Component } from "react";

//Mặc định tất cả các component đều có 1 props tên là children
export default class SuperCard extends Component {
  render() {
      const {title , footer} = this.props;
    return (
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">{this.props.children}</div>
        <div className="card-footer text-muted">{footer && footer()}</div>
      </div>
    );
  }
}
//Noi dung ben trong component supercard duoc goi la children
{
  /* <SuperCard>
<p>abc</p>
</SuperCard> */
}
