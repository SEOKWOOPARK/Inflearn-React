import React, { createContext, useContext, useState } from 'react';
// useContext 여러 번 사용 => 데이터 종류별 컨텍스타 분할 => 렌더링 성능 이점
const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');
// 하나의 컨텍스트가 수정 되었을 때 나머지 컨텍스트는 변경되지 않는다.
export default function App() {
  const [name, setName] = useState('sehee');
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value={name}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요.`}</p>;
}
