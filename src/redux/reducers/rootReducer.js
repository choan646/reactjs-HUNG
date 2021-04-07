//Reducer tổng, quản lý tất cả các ruducer con
import { combineReducers } from "redux";

//Import các reducer con
import countReducer from "./countReducer";
import colorReducer from "./colorReducer";
import todosReducer from "./todosReducer";
import coursesReducer from "./coursesReducer";
// import burgerReducer from "./burgerReducer";
import {BugerReducer} from "../reducers/BugerReducer";

const rootRuducer = combineReducers({
  //Đây là nơi khai báo các reducer con
  count: countReducer,
  color: colorReducer,
  todos: todosReducer,
  courses: coursesReducer,
  // burger: burgerReducer,
  buger: BugerReducer,
});
export default rootRuducer;
