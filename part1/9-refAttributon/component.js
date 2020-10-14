import React, { useRef, useEffect } from 'react';

export default function App() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <InputAndSave inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}
// 함수형 컴포넌트를 호출해서 'ref'를속성값 입력불가
// 여기선 inputRef로 대체
// forwardRef 도입

function InputAndSave({ inputRef, buttonRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref={buttonRef}>저장</button>
    </div>
  );
}

const Button = React.forwardRef(function ({ onClick }, ref) {
  return (
    <button onClick={onClick} ref={ref}>
      저장
    </button>
  );
});
// fowardRef의 두 번쨰 파라미터 ref
// fowardRef를 쓰지 않고 순수 함수형 컴포넌트의 여러 요소에서 쓰면 중복이 되서 정확히 쓰임을 파악하기 어렵다
