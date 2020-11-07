import { createStore, applyMiddleware } from 'redux';
import React from 'react';

const middleware1 = (store) => (next) => (action) => {
  console.log('middleware1 start');
  const result = next(action);
  console.log('middleware1 end');
  return result;
};

const middleware2 = (store) => (next) => (action) => {
  console.log('middleware2 start');
  const result = next(action);
  console.log('middleware2 end');
  return result;
};

const myReducer = (state, action) => {
  console.log('myReducer');
  return state;
};

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({ type: 'someAction' });

export default function App() {
  return <div>실전 리액트</div>;
}
// 처음 상태값 초기화를 위해 myReucer 콘솔 출력 후
// 나머지 액션들도 이어서 콘솔 출력
