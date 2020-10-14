import React, { useState, useRef, useLayoutEffect } from 'react';

export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }
    let v = 0;
    for (let i = 0; i < 1000000000; i++) {
      v += i * 2 + i;
    }
    console.log(v);
  }, [width]);
  // 실행시점:  렌더링 결과 돔반영 -> useLayoutEffect -> 화면 출력
  //500보다 큰 값이 들어오고 useEffect라면 너비를 500으로 실행하면서 착시가 보임
  return (
    <div>
      <div ref={boxRef} style={{ width, height: 100, backgroundColor: 'green' }}>
        test
      </div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500이하
      </button>

      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500이상
      </button>
    </div>
  );
}

// 공통점: 렌더링 이후 부수효과 함수를 실행한다
// useEffect: 비동기 호출,
// useLayoutEffect: 동기 호출, 렌더링 돔에 반영후 바로 실행 호출. 연산 많으면 안돼.
// 렌더링 이후 돔요소 값 읽기나 조건부 컴포넌트 렌더링 시에 사용
