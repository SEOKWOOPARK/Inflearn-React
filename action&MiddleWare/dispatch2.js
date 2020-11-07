function addTodo({ title, priority }) {
  return { type: 'todo/ADD', title, priority };
}

function removeTodo({ id }) {
  return { type: 'todo/REMOVE', id };
}

function removeAllTodo() {
  return { type: 'todo/REMOVE_ALL' };
}
// action creator 함수들 선언하고 아래처럼 호출(액션 객체 일관성 확보)
// 어떤 액션 데이터 타입인지 명시적으로 문서화하는 과정

store.dispatch(addTodo({ title: '영화 보기', priority: 'high' }));
store.dispatch(removeTodo({ id: 123 }));
store.dispatch(removeAllTodo());
