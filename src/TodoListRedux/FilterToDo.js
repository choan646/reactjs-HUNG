import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import {filTerToDo} from "../redux/actions/todosAction"

export default function FilterToDo() {
  const dispatch = useDispatch();
  const filterToDo = (status) => {
    // const action = {
    //   type: "FILTER_TODO",
    //   payload: {
    //     status,
    //   },
    // };
    // dispatch(action);

    dispatch(filTerToDo(status));
  };
  return (
    <div className="d-flex mt-4">
      <Button
        color="primary"
        className="mr-4"
        onClick={() => filterToDo("all")}
      >
        All
      </Button>
      <Button
        color="success"
        className="mr-4"
        onClick={() => filterToDo("completed")}
      >
        Completed
      </Button>
      <Button color="warning" onClick={() => filterToDo("uncompleted")}>
        Uncompleted
      </Button>
    </div>
  );
}
