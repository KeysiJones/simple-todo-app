function TodoInput({ todoInputValue, onUpdateTodoState }) {
  return (
    <input
      onChange={onUpdateTodoState}
      value={todoInputValue}
      name="todoInput"
      style={todoInputStyle}
      autoComplete="off"
    />
  );
}

const todoInputStyle = {
  border: "2px solid black",
  borderRadius: "5px",
  paddingLeft: "5px",
};

export { TodoInput };
