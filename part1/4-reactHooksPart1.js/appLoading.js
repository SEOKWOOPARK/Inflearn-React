import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

export default function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    ReactDom.unstable_batchedUpdates(() => {
      setCount((v) => v + 1); //상태값함수 안에 또다른 함수
      setCount((v) => v + 1); // 처리되기전 상태값을 파라미터로 받는 원리
      // setCount(count + 1);
      // setCount(count + 1);
    });
  }

  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  });

  console.log('render called');
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

// 상태값 변경함수의 요청이 여러개 있으면 비동기,batch로 처리
// 동기로 처리하면 상태값 변경함수 호출마다 화면 다시 업데이트, 성능이슈
