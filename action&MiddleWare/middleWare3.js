import { createStore, applyMiddleware } from 'redux';
import React from 'react';

const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;
  // const delay = action.meta && action.meta.delay; 위아래 동일
  if (!delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);

  return function cancel() {
    clearTimeout(timeoutId);
  };
};

const myReducer = (state = 'mike', action) => {
  // 상태값 초기화
  console.log('myReducer');
  if (action.type === 'someAction') {
    return { name: 'mike2' };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(delayAction));
const cancel = store.dispatch({ type: 'someAction', meta: { delay: 3000 } });
cancel();
// timeoutId가 반환한 값이 dispatch가 반환하는 값

export default function App() {
  return <div>실전 리액트</div>;
}
