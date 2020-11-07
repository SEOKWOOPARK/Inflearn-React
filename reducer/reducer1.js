function reducer(state = INITIAL, action) {
  // 파라미터 초기 상태값, action객체 순
  switch (action.type) {
    case REMOVE_ALL:
      return {
        ...state, // 불변객체는 전개연산자로.
        todos: [],
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

const INITIAL_STATE = { todos: [] };

// action이 발생하면 새로운 상태값을 만드는 함수 => 리듀서
// action object + dispatch => 리덕스 상태값 변경하는 유일한 방법
// dispatch가 호출된 순서로 상태값 변화 , 상태값 불변 객체 관리
