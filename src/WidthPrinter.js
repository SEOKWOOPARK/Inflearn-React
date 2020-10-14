import React, { useState, useEffect } from 'react';

export default function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const onReSize1 = () => setWidth(window.innerWidth);
    const onReSize2 = () => setHeight(window.innerHeight);

    console.log('useEffect 1');
    window.addEventListener('resize', onReSize1);
    window.addEventListener('resize', onReSize2);
    return () => {
      // 반환함수
      window.removeEventListener('resize', onReSize1);
      window.removeEventListener('resize', onReSize2);
      console.log('너비 변경');
    };
  });
  // 의존성 배열을 안쓰면 상태값이 변경될때마다 컴포넌트 렌더링 -> 부수함수도 그만큼 실행
  //부수함수에서 반환하는 값은 다음 부수함수에서 호출되기 직전에 호출
  // 컴포넌트가 unmount 되기직전에 마지막 호출, 최소 1번은 호출
  // 의존성배열 = 빈배열 -> mount시에 부수함수 호출 unmount시에 반환함수 실행

  return (
    <div>
      <p>{`height is ${height}`}</p>
      <p>{`width is ${width}`}</p>
    </div>
  );
}
