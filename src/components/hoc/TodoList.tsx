import React, { useState, useEffect } from "react";
import Hoc from "./Hoc";
const TodoList = ({ data }: any) => {
  let renderTodos = data.map((todo: any) => {
    return <p key={todo.id}>{todo.title}</p>;
  });

  return <div>{renderTodos}</div>;
};
export default Hoc(TodoList, "todos");
