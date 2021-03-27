import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";

export default class Baitap4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          manHinh: 'AMOLED, 6.2", Full HD+',
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./img/sp_vivo850.png",
        },

        {
          maSP: 2,
          tenSP: "Meizu 16Xs",
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie); Flyme",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 7600000,
          hinhAnh: "./img/sp_note7.png",
        },

        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
          heDieuHanh: "iOS 12",
          cameraSau: "Chính 12 MP & Phụ 12 MP",
          cameraTruoc: "7 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 27000000,
          hinhAnh: "./img/sp_iphoneX.png",
        },
      ],
      carts: [],
    };
  }

  addToCart = (product) => {
    console.log(product);
    //Khi setstate với array hoặc obj, ta cần truyền vào 1 array, hoặc obj mới (khác địa chỉ vùng nhớ)
    //Kiểm tra sp đã tồn tại trong giỏ hàng hay chưa
    const index = this.state.carts.findIndex(
      (item) => item.maSP === product.maSP
    );
    if (index === -1) {
      //Them moi và set số lượng mặc định là 1
      const carts = [...this.state.carts, { ...product, soLuong: 1 }];
      this.setState({ carts });
    } else {
      //Cập nhật số lượng (đã tồn tại sp trong giỏ hàng)
      // const carts = this.state.carts.map((item, idx) => {
      //   if (index === idx) {
      //     return { ...item, soLuong: item.soLuong + 1 };
      //   }
      //   return item;
      // });

      const carts = [...this.state.carts];
      carts[index].soLuong += 1;

      this.setState({ carts });
    }
  };

  componentDidMount(){
    const carts = localStorage.getItem('carts');
    if(carts){
      this.setState({ carts: JSON.parse(carts) });
    }
  }

  componentDidUpdate(preProps, preState) {
    //Kiểm tra xem state giỏ hàng có thay đổi kh?
    if (this.state.carts !== preState.carts) {
      localStorage.setItem("carts", JSON.stringify(this.state.carts));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="text-right mb-4">
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-info"
          >
            giỏ hàng
          </button>
        </div>
        <ProductList
          products={this.state.products}
          addToCart={this.addToCart}
        />
        <ProductCard carts={this.state.carts} />
      </div>
    );
  }
}
