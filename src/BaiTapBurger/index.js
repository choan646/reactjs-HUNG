import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import { connect } from "react-redux"; //Thu vien ket noi voi redux
import { ADD_BREADMID } from "../redux/constants/burgerConstant";

class BaiTapBurger extends Component {
  renderBreadmid = () => {
    let { buger } = this.props;
    return Object.entries(buger).map(([propsBuger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propsBuger}></div>);
      }

      return breadMid;
    });
  };

  renderMenu = () => {
    let { menu, buger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td className="text-uppercase">{propsMenu}</td>
          <td className="text-center">
            <Button
              color="danger"
              disabled={!buger[propsMenu]}
              className="mr-2"
              onClick={() => {
                this.props.addBreadMid(propsMenu, -1);
              }}
            >
              -
            </Button>
            {buger[propsMenu]}
            <Button
              color="success"
              className="ml-2"
              onClick={() => {
                this.props.addBreadMid(propsMenu, 1);
              }}
            >
              +
            </Button>
          </td>
          <td className="text-center">{price}</td>
          <td className="text-center">{buger[propsMenu] * price} $</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-danger text-center">
          <b>Bài Tập Burger</b>
        </h1>
        <div className="row">
          <div className="col-sm-7">
            <h3 className="text-center text-warning mt-3">
              Bánh Burger của bạn
            </h3>
            <div className="breadTop mt-3"></div>
            {this.renderBreadmid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-sm-5">
            <h3 className="text-center text-success mt-3">Chọn Nhân Bánh</h3>
            <Table className="mt-3">
              <thead>
                <tr>
                  <th>Thức Ăn</th>
                  <th></th>
                  <th className="text-center">Giá</th>
                  <th>Thành Tiền</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td className="text-center" style={{ fontSize: "1.2rem" }}>
                    <b>Tổng Tiền:</b>
                  </td>
                  <td className="text-center" style={{ fontSize: "1.2rem" }}>
                    <b>{this.props.total} $</b>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    buger: state.buger.buger,
    menu: state.buger.menu,
    total: state.buger.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBuger, amount) => {
      //Tao ra action
      const action = {
        type: ADD_BREADMID,
        propsBuger,
        amount,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);
