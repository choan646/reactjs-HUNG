import React, { Component } from "react";

export default class ProductItem extends Component {
    getProduct = ()=> {
        console.log("click", this.props.product);
        //Goin tới props getProduct là 1 function và truyền data cần gửi lên component cha
        this.props.getProduct(this.props.product);
    }

  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" height="300px" src={product.hinhAnh} alt="product" />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.manHinh}</p>
          <p className="card-text">{product.heDieuHanh}</p>
          <button className="btn btn-success" onClick={this.getProduct}>Xem Chi Tiết</button>
          <button className="btn btn-danger ml-4" onClick={() => this.props.addToCart(product)}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
