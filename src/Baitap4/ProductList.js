import React, { Component } from "react";
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: null,
    };
  }

  getProduct = (product)=> {
    //Lấy được product từ component productItem
    //setState lại cho productDetai bằng product vừa nhận được
    console.log(product);
    this.setState({ productDetail: product });
  }


  addToCart = (product)=> {
    //Trung gian để tiếp tục truyền product lên component btap4
    // console.log(product);
    this.props.addToCart(product);
  }


  render() {
    const { products } = this.props;
    return (
      <>
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.maSP} className="col-sm-4">
                <ProductItem product={product} getProduct={this.getProduct} addToCart={this.addToCart} />
              </div>
            );
          })}
        </div>

        <ProductDetail product={this.state.productDetail} />
      </>
    );
  }
}
