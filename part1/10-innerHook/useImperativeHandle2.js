import React, { useRef } from 'react';
import Profile from './Profile';

export default function App() {
  const profileRef = useRef();
  const onClick = () => {
    if (profileRef.current) {
      // current는 하위컴포넌트의 addAge와 getNameLength의 반환값을 참조
      // 자식 컴포넌트의 이벤트 -> 부모 컴포넌트에서 호출
      console.log('current name length', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };

  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}

// useImperativeHandle1의 부모 컴포넌트, 따라서 클릭 이벤트는 여기서 실행
