import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../redux/actions/coursesAction";

//Lấy danh sách khóa học từ API và hiển thị ra giao diện

export default function QuanLyKhoaHoc() {
  const dispatch = useDispatch();
  //   const [courses, setCourse] = useState([]);
  const { data } = useSelector((state) => state.courses);

  useEffect(() => {
    // async function handlegetCourses() {
    //   const { data } = await axios({
    //     method: "GET",
    //     url:
    //       "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    //   });
    //   //   setCourse(data);
    //   dispatch(getCourses(data));
    // }

    // handlegetCourses();

    //dispatch middleware
    dispatch(getCourses());
  }, []);
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div key={item.maKhoaHoc} className="col-sm-4 card">
            <img className="card-img-top" src={item.hinhAnh} alt="khoahoc" />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              <p className="card-text">{item.moTa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
