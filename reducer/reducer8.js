const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.todos.push(action.todo),
  [REMOVE_ALL]: (state) => (state.todos = []),
  [REMOVE]: (state, action) => (state.todos = state.todos.filter((todo) => todo.id !== action.id)),
});

// reducer5.js 와 같은 로직
