import { createStore, applyMiddleware } from 'redux';
import React from 'react';

const saveToLocalStorage = (store) => (next) => (action) => {
  if (action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
};
// 로컬스토리지에 저장.

const myReducer = (state = 'mike', action) => {
  // 상태값 초기화
  console.log('myReducer');
  if (action.type === 'someAction') {
    return { name: 'mike2' };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
store.dispatch({ type: 'someAction', title: 'asdf', meta: { localStorageKey: 'myKey' } });

export default function App() {
  return <div>실전 리액트</div>;
}
