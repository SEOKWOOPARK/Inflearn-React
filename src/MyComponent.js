import React from 'react';

function MyComponent({ value1, value2 }) {
  console.log('MyComponent render');

  return (
    <div>
      <p>{`value1: ${value1}`}</p>
      <p>{`value2: ${value2}`}</p>
    </div>
  );
}

function isEqual(prevProps, nextProps) {
  return prevProps.value1 === nextProps.value1;
  // 초점은 value1이다. 

  // return true;
  // true를 반환하면 이전 렌더링 결과를 계속 반영하기에 아무동작도 안일어난다
}

export default React.memo(MyComponent, isEqual);
