export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

export function addTodo({ title, priority }) {
  return { type: ADD, title, priority };
}

export function removeTodo({ id }) {
  return { type: REMOVE, id };
}

export function removeAllTodo() {
  return { type: REMOVE_ALL };
}
// 액션 타입 -> action creator, 리듀서에서 사용. 상수 변수로 해놓자
