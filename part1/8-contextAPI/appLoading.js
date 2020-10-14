import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
  const [user, setUser] = useState({ username: 'mike', age: 23 });
  const [count, setCount] = useState(0);
  console.log('app rende');
  return (
    <div>
      <UserContext.Provider value={user}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserContext.Provider>
    </div>
    // value={{ username, age }} 이런식으로 쓰면
    // App이 렌더링될때마다 새로운 객체가 만들어진다. 객체들의 프로퍼티가 변경되지 않아도
    // Consumer들은 필요이상으로 렌더링.
  );
}

const Profile = React.memo(function () {
  console.log('Profile render');
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  console.log('greeting render');
  const { username } = useContext(UserContext);
  return <p>{`${username}님 안녕하세요.`}</p>;
}
