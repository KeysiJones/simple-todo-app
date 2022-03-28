function TodoForm({ children, onAddTodo }) {
  return (
    <form style={todoFormStyle} onSubmit={onAddTodo}>
      {children}
    </form>
  );
}

const todoFormStyle = {
  marginTop: "10px",
};

export { TodoForm };
