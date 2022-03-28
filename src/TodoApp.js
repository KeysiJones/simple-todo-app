import "./App.css";
import React, { useState } from "react";
import {
  TodoList,
  TodoHeader,
  TodoForm,
  TodoContainer,
  TodoInput,
} from "./components";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const onAddTodo = (event) => {
    event.preventDefault();
    setTodos((previousTodos) => [...previousTodos, newTodo]);
    setNewTodo("");
  };

  const onUpdateTodoState = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <TodoContainer>
      <TodoHeader title="Pretty simple todo list app" />
      <TodoList todos={todos} />
      <TodoForm onAddTodo={onAddTodo}>
        <TodoInput
          todoInputValue={newTodo}
          onUpdateTodoState={onUpdateTodoState}
        />
      </TodoForm>
    </TodoContainer>
  );
}

export default TodoApp;
