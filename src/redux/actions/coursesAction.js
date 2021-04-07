import { GET_COURSES } from "../constants/coursesConstant";
import axios from "axios";

export const getCourses = () => {
  //khi su dung redux-thunk, action cho phep ta return ve 1 function
  return async (dispatch) => {
    //xử lí logic gọi API
    const { data } = await axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    });
    dispatch({
      type: GET_COURSES,
      payload: { data },
    });
  };
};
