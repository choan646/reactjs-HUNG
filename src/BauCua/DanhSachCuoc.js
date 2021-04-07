import React from "react";

export default function DanhSachCuoc({ tienThuong, danhSachCuoc,xuLyDatCuoc }) {
    const thayDoiCuoc = (item, status) => {
        //Status: true/false <=> tang/giam
        xuLyDatCuoc(item, status)
    }


  return (
    <div className="container">
      <div className="row">
        {danhSachCuoc.map((item) => (
          <div key={item.ten} className="col-sm-4">
            <img className="w-100" src={item.hinhAnh} alt="xucSac" />
            <div className="mt-1 mb-3 bg-warning text-center p-2">
              <span className="mr-2">Cược : </span>

              <button
                className="btn btn-success"
                //Nếu điểm cược của item là 0 => không cho giảm cược nữa
                disabled={!item.diemCuoc}
                onClick={()=>thayDoiCuoc(item, false)}
              >
                -
              </button>
              <span className="text-success mx-3">{item.diemCuoc}</span>

              <button
                className="btn btn-success"
                //Nếu tiền thưởng bằng 0, không cho tăng cược
                disabled={!tienThuong}
                onClick={()=>thayDoiCuoc(item, true)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}