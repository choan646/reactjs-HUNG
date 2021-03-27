import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    const tongTien = this.props.carts.reduce((total, item) => {
      return total + item.soLuong * item.giaBan;
    }, 0);
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ Hàng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <th>Mã SP</th>
                  <th>Tên SP</th>
                  <th>Hình ảnh</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </thead>
                <tbody>
                  {this.props.carts.map((item) => {
                    return (
                      <tr key={item.maSP}>
                        <td>{item.maSP}</td>
                        <td>{item.tenSP}</td>
                        <td><img src={item.hinhAnh} height="30px" width="50px" alt="hinh anh"/></td>
                        <td>{item.soLuong}</td>
                        <td>{item.giaBan}</td>
                        <td>{item.giaBan * item.soLuong}</td>
                      </tr>
                    );
                  })}
                  <tr colSpan="6">
                    <p className="text-right">Tổng tiền: {tongTien}</p>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Tiếp tục mua sắm
              </button>
              <button type="button" className="btn btn-primary">
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
