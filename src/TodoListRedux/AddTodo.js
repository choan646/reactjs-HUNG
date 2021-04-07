import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todosAction";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleChange = (evt) => {
    setTodo(evt.target.value);
  };

  const handleAddTodo = () => {
    // const action = {
    //   type: "ADD_TODO",
    //   payload: {
    //     todo,
    //   },
    // };
    // dispatch(action);

    dispatch(addTodo(todo));
  };
  return (
    <div className="w-50 d-flex">
      <Input value={todo} onChange={handleChange} />
      <Button className="ml-4" color="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
}
