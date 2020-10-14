import React, { useState, createContext } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <UserContext.Provider value={{ username, age }}>
        <Profile />
      </UserContext.Provider>
    </div>
    // App이 렌더링될때마다 새로운 객체가 만들어진다. 객체들의 프로퍼티가 변경되지 않아도
    // Consumer들은 필요이상으로 렌더링.
  );
}
