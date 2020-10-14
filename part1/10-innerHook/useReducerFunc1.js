import React, { useReducer } from 'react';

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE); //파리미터 => 함수,초깃값 순서

  return (
    <div>
      <p>{`name is ${(state, name)}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: 'setName', name: e.currentTarget.value })}
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) => dispatch({ type: 'setAge', age: e.currentTarget.value })}
      />
    </div>
  ); //dispatch에서 객체가 정해지면 그 객체가 reducer함수의 action으로 할당됨
}

const INITIAL_STATE = { name: 'empty', age: 0 };
const MAX_AGE = 50;

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      if (action.age > MAX_AGE) {
        return { ...state, age: MAX_AGE };
      } else {
        return { ...state, age: action.age };
      }
  }
}
// 여러개의 상태값 관리 => useReducer사용
