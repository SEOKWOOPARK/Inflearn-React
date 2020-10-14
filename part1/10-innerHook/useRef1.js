import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const timerIdRef = useRef(-1);
  useEffect(() => {
    timerIdRef.current = setTimeout(() => {}, 1000);
  });
  // 렌더링과 관계없는 값(timerIdRef)을 저장할때도 useRef가 쓰인다.
  // useState를 사용했다면 ui데이터가 바뀐게 아니라 화면이 바뀔게 없는데도 불필요한 렌더링 발생

  useEffect(() => {
    if (timerIdRef.current >= 0) {
      clearTimeout(timerIdRef.current);
    }
  });
}
