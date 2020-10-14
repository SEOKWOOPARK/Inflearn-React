import React, { useState, createContext } from 'react';

const UserContext = createContext('unknown');

export default function App() {
  return (
    <div>
      <UserContext.Provider value="mike"></UserContext.Provider>
      <Profile></Profile>
    </div>
    //consumer 컴포넌트의 상위인 Profile이 Provider안에 있지 않으면 컨슈머는 맨 상단의
    //UserContext에 있는 값을 참조하게 되기 때문에 Profile 같은 중간 컴포넌트의 위치를 주의
  );
}
