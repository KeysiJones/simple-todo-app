function TodoList({ todos }) {
  return (
    <ol style={listStyle}>
      {todos.map((todo) => (
        <li key={todos.indexOf(todo)}>{todo}</li>
      ))}
    </ol>
  );
}

const listStyle = {
  listStyle: "initial",
};

export { TodoList };
