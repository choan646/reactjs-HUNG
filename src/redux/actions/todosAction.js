//Move các action ra 1 file riêng để có thể tái sử dụng và dễ chỉnh sửa
import {
  ADD_TODO,
  FILTER_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
} from "../constants/todosConstants";

export const filTerToDo = (status) => {
  return {
    type: FILTER_TODO,
    payload: {
      status,
    },
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: {
      id,
    },
  };
};
