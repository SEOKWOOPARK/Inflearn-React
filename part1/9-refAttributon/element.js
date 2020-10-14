import React, { useRef, useEffect } from 'react';

export default function App() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus(); // current는 실제 돔 요소, 해당 클래스의 메서드 호출
  }, []);
  // 왜 ref 메서드를 useEffect에 넣어야 하나?
  // 실제 돔요소는 렌더링이 돔에 반영 이후에 접근할 수 있기 떄문에
  // useEffect도 렌더링 후에 실행할 수 있는 훅이다. 따라서 이 안에 넣어야 한다.
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

// 자식요소애 접근힐 떼 ref를 쓴다.
// dom요소, 컴포넌트요소가 될 수 있다.
