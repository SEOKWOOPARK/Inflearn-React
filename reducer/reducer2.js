function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, { id: getNewid(), title: action.title, priority: action.priority }],
      };
  }
}
// 속성값이 깊숙이 있을때 전개연산자가 불편

const state = {
  user: {
    name: 'mike',
    friends: [
      {
        name: 'jane',
        age: 23,
      },
      {
        name: 'jake',
        age: 24,
      },
    ],
  },
  products: [],
};

// 'jane'이 수정되면 자신과 부모 객체의 레퍼런스도 수정되어야 한다

prevState.user === nextState.user; //불변 객체로 관리했을 때 단순비교가 편한 경우
