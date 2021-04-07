import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "reactstrap";
import {upAmount, downAmount} from "../redux/actions/burgerAction"

export default function Burger() {
  const dispatch = useDispatch();
  const { burger, total } = useSelector((state) => state.burger);

 const handleDownAmount=(id) =>{     
    dispatch(downAmount(id))
 }
 const handleUpAmount=(id) =>{     
    dispatch(upAmount(id))
}
  return (
    <div className="container mt-5 text-center ">
      <h1 className="text-danger">BÀI TẬP BURGER</h1>
      <div className="row w-100 d-flex mt-5">
        <div className="col-sm-6 mr-2">
          <h3 className="text-warning">Bánh Burger Của Bạn</h3>
          <div className="breadTop mt-5"></div>
          {/* {burger.map((burger) => (
            <div className={burger.name}></div>
            //nếu số lượng là 2 trở lên thì chưa render ra được
          ))} */}
          <div className="breadBottom"></div>
        </div>
        <div className="col-sm-5">
          <h3 className="text-success">Chọn Thức Ăn</h3>
          <Table className="mt-3">
            <thead>
              <tr>
                <th>Thức ăn</th>
                <th>Số Lượng</th>
                <th>Giá</th>
                <th>Thành Tiền</th>
              </tr>
            </thead>
            <tbody>
              {burger.map((burger) => {
                return (
                  <tr key={burger.id}>
                    <td>{burger.name}</td>
                    <td>
                      <Button color="danger" className="mr-2" disabled={!burger.amount} onClick={()=>handleDownAmount(burger.id)}>
                        -
                      </Button>
                      {burger.amount}
                      <Button color="success" className="ml-2" onClick={()=>handleUpAmount(burger.id)}>
                        +
                      </Button>
                    </td>
                    <td>{burger.price}</td>
                    <td>{burger.amount * burger.price}</td>
                  </tr>
                );
              })}
              <tr className="text-right">
                <td className="pr-4" colSpan="4" style={{ fontSize: "1.4rem" }}>
                  <b> Tổng Tiền : {total} </b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button color="primary" block className="mt-2">
            THANH TOÁN
          </Button>
        </div>
      </div>
    </div>
  );
}
