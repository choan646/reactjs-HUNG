import React, { useState, useEffect } from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import XucXac from "./XucXac";

const danhSachXucSac = [
  { ten: "bau", hinhAnh: "./img_BauCua/bau.png" },
  { ten: "cua", hinhAnh: "./img_BauCua/cua.png" },
  { ten: "tom", hinhAnh: "./img_BauCua/tom.png" },
  { ten: "ca", hinhAnh: "./img_BauCua/ca.png" },
  { ten: "nai", hinhAnh: "./img_BauCua/nai.png" },
  { ten: "ga", hinhAnh: "./img_BauCua/ga.png" },
];

export default function BauCua() {
  const [tienThuong, setTienThuong] = useState(5000);
  const [danhSachCuoc, setDanhSachCuoc] = useState(() => {
    return danhSachXucSac.map((item) => ({
      ...item,
      diemCuoc: 0,
    }));
  });

  const [xucXac, setXucXac] = useState([
    { ten: "bau", hinhAnh: "./img_BauCua/bau.png" },
    { ten: "bau", hinhAnh: "./img_BauCua/bau.png" },
    { ten: "bau", hinhAnh: "./img_BauCua/bau.png" },
  ]);

  //useEffect này sẽ được chạy sau khi mảng xúc xác thay đổi
  useEffect(() => {
    //Tính điểm

    //Loc danh sach dat cuoc
    const danhSachDatCuoc = danhSachCuoc.filter((item) => item.diemCuoc);
    let tongDiem = 0;
    //Duyet qua mang danhSachDatCuoc de tra lai tien cuoc neu trung
    danhSachDatCuoc.forEach((item) => {
      const found = xucXac.find((xucXac) => xucXac.ten === item.ten);
      //Tìm thấy xúc xắc trùng với item trong danhSachDatCuoc
      if (found) {
        tongDiem += item.diemCuoc;
      }
    });

    //Duyệt quá mảng xucXac để tings tiền thắng cược
    xucXac.forEach((item) => {
      const found = danhSachDatCuoc.find((cuoc) => cuoc.ten === item.ten);
      if (found) {
        tongDiem += found.diemCuoc;
      }
    });

    //Reset diem cuoc ve 0
    const newDanhSachCuoc = danhSachCuoc.map((item) => ({
      ...item,
      diemCuoc: 0,
    }));

    setTienThuong(tienThuong + tongDiem);
    setDanhSachCuoc(newDanhSachCuoc);

  }, [xucXac]);

  const xuLyDatCuoc = (item, status) => {
    const newDanhSachCuoc = danhSachCuoc.map((cuoc) => {
      if (cuoc.ten === item.ten) {
        return {
          ...cuoc,
          diemCuoc: status ? cuoc.diemCuoc + 100 : cuoc.diemCuoc - 100,
        };
      }
      return cuoc;
    });

    setTienThuong(status ? tienThuong - 100 : tienThuong + 100);
    setDanhSachCuoc(newDanhSachCuoc);
  };

  const xuLyXucXac = () => {
    const newXucXac = xucXac.map((item) => {
      //Math.random(); * (max + 1)
      const random = Math.floor(Math.random() * 6);
      return danhSachXucSac[random];
    });
    setXucXac(newXucXac);
  };

  return (
    <div className="bg-secondary baucua-container">
      <div className="w-75 mx-auto">
        <img width="100%" src="./img_BauCua/Logo.png" alt="logo" />
      </div>
      <div className="w-25 mx-auto">
        <p
          className="bg-warning"
          style={{
            fontSize: "25px",
            borderRadius: "10px",
            border: "5px solid rgb(0,0,0",
            textAlign: "center",
          }}
        >
          Tiền Thưởng : {tienThuong}
        </p>
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* Danh sach cuoc */}
          <div className="col-sm-8">
            <DanhSachCuoc
              tienThuong={tienThuong}
              danhSachCuoc={danhSachCuoc}
              xuLyDatCuoc={xuLyDatCuoc}
            />
          </div>
          {/* Danh sach xuc sac */}
          <div className="col-sm-4">
            <XucXac xucXac={xucXac} xuLyXucXac={xuLyXucXac} />
          </div>
        </div>
      </div>
    </div>
  );
}
