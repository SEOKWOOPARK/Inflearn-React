import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  });

  return <button onClick={() => setCount(count + 1)}>increase</button>;
}
// useEffect는 렌더링이 끝난후에 실행되는 함수
// useEffect안에 있는 함수는 부수효과 함수
