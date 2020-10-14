import React, { useRef, useState } from 'react';

export default function App() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>텍스트 보이기/가리기</button>
      <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}
// ref에 current가 없을 수도 있다.
// 특히 조건부 렌더링에서 ref를 주의
// current 속성 검사 필수
