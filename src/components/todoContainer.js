function TodoContainer({ children }) {
  return <main style={todoContainerStyle}>{children}</main>;
}

const todoContainerStyle = {
  margin: "30px",
};

export { TodoContainer };
