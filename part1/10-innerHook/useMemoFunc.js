import React, { useMemo, useState } from 'react';
// useMemo는 계산량이 많은 함수의 반환값을 처리한다.

export default function App() {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const value = useMemo(
    () => runExpensiveJob(v1, v2),
    [v1, v2], //뒤 의존성 배열의 값이 하나라도 변경될시 useMemo실행, 바뀌지 않으면 함수의 이전 실행값 재활용
  );

  return (
    <>
      <p>{`value is  ${value}`}</p>
      <button
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1/v2수정
      </button>
      <p>{`v3 is ${v3}`}</p>
      <button onClick={() => setV3(Math.random())}>v3 수정</button>
    </>
  );
}

function runExpensiveJob(v1, v2) {
  console.log('runExpensiveJob is called');

  return v1 + v2;
}
