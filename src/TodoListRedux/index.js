import React from "react";
import { useSelector } from "react-redux";
import {ListGroup } from "reactstrap"
import AddTodo from "./AddTodo";
import FilterToDo from "./FilterToDo";
import TodoItem from "./TodoItem"

export default function TodoList() {
  const { data , filter , isLoading } = useSelector((state) => state.todos);

  //Dựa vào giá trị filter lấy từ store để lọc ra những todo cần lấy
  const filterData = filter === "all" ? data : data.filter(item =>{
    if(filter === "completed"){
      return item.isComplete === true;
    }
    if(filter === "uncompleted"){
      return item.isComplete === false;
    }
  })
  return (
    <div className="container">
      <h1 className="text-primary">Todo List</h1>
      <AddTodo/>
      <ListGroup className="mt-3">
        {filterData.map((todo) => (
            <TodoItem key={todo.id} todo={todo} ></TodoItem>
))}
      </ListGroup>

      <FilterToDo/>
    </div>
  );
}
