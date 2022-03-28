function TodoHeader({ title }) {
  return <h1 style={todoHeaderStyle}>{title}</h1>;
}

const todoHeaderStyle = {
  marginBottom: "10px",
};

export { TodoHeader };
