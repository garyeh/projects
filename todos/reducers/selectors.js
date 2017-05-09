const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  return keys.map(id => state.todos[id]);
};


export default allTodos;
