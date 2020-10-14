import React, { useState, useEffect } from 'react';
import Counter from './Counter';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSeconds((v) => v + 1);
    }, 1000);
  });
  return (
    <div>
      {seconds % 2 && <Counter />}
      {/* <Counter key={seconds} /> 같은 결과 */}
      <h1 style={{ color: seconds % 2 ? 'green' : 'orange' }}>안녕하세요</h1>
      <h2>지금까지 {seconds}초 경과</h2>
    </div>
  );
}
//컴포넌트의 key값이 바뀌면 컴포넌트가 삭제 생성이 반복
// div의 key값이 바뀌면 가상돔이 달라진것으로 인식 -> 삭제 생성 반복
// seconds가 초에 따라 바뀐다. 이부분만 화면에 반영하는게 원리

// 브라우저에서 돔변경은 오래걸린다 -> 빠른 렌더링을 위해 돔변경 최소화 및 메모리에 가상돔 메모리 적재
// 업데이트 전후의 가상돔 비교해서 변경된 부분만 렌더링에 반영
