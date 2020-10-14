import React, { createContext } from 'react';

const UserContext = createContext({ username: 'unknown', helloCount: 0 });
const SetUserContext = createContext(() => {});
// SetUserContext =>  데이터를 수정하는 컨텍스트로 지정, 즉 상태값 변경함수

//하이 컴포넌트에서 데이터 수정
export default function App() {
  const [user, setUser] = useState({ username: 'mike', helloCOunt: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}
