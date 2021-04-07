import React from "react";
import { Button, ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import {deleteTodo, changeStatus} from "../redux/actions/todosAction"

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // const action = {
    //   type: "DELETE_TODO",
    //   payload: {
    //     id: todo.id,
    //   },
    // };
    // dispatch(action);

    //Thay vì tự tạo action trong component, ta tạo ra action trong 1 file và import và sử dụng nó
    dispatch(deleteTodo(todo.id));
  };

  const handleChangeStatus = () => {
    // const action = {
    //   type: "CHANGE_STATUS",
    //   payload: {
    //     id: todo.id,
    //   },
    // };
    // dispatch(action);

    dispatch(changeStatus(todo.id))
  };
  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between">
      <span
        style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
      >
        {todo.name}
      </span>
      <div>
        <Button
          color={todo.isComplete ? "warning" : "success"}
          className="mr-4"
          onClick={handleChangeStatus}
        >
          {todo.isComplete ? "Cancel" : "Complete"}
        </Button>
        <Button color="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </ListGroupItem>
  );
}
