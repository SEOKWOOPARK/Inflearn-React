import React from 'react';
import { createStore } from 'redux';
import createReducer from './redux-helper'; // reducer9.js

export default function App() {
  return <div>실전 리액트</div>;
}

const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
  INCREMENT: (state) => (state.value += 1),
});

const store = createStore(reducer);
// store -> 액션처리 완료를 외부에 통보
let prevState;
store.subscribe(() => {
  // 액션이 끝났다는 정보를 subscribe으로 받는다
  const state = store.getState();
  if (state === prevState) {
    console.log('상탯값 같음');
  } else {
    console.log('상탯값 변경됨');
  }
  prevState = state; // 이전 상탯값 저장
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'OTHER_ACTION' });
store.dispatch({ type: 'INCREMENT' });
