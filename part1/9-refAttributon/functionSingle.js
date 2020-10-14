import React, { useState, useCallback } from 'react';

export default function App() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);
  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);
  // useCallback 메모이제이션 기능, 한 번 생성된 함수를 계속 재사용하는 기능

  return (
    <div>
      {showText && (
        <input
          type="text"
          // ref={(ref) => ref && setText(INITIAL_TEXT)}
          ref={setInitialText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
  // ref 에 함수 => 해당요소(여기선 input태그)가 생성이나 사라질 떄 한번씩 호출, 사라질땐 null
  // 문자를 입력하면서 렌더링 될떄마다 ref에 새로운함수가 들어오면 이전 ref의 함수엔 null을 할당한다
  // 무언가를 입력해도 INITIAL_TEXT가 계속 입력됨 => 새로운 입력을 막고 고정시킬려면 useCallback사용
}

const INITIAL_TEXT = '안녕하세요';

// ref속성에 함수입력
