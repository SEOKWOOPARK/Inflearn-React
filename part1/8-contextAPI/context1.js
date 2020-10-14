import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext('unknown');

export default function App() {
  const [name, setName] = useState('sehee');
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </UserContext.Provider>
    </div>
  );
}
//만약 Provider에서 value가 수정되면 하위컴포넌트들의 props가 변경되어 다시 렌더링

const Profile = React.memo(function () {
  console.log('profile rendered');
  return (
    <div>
      <Greeting />
    </div>
  );
}); // 속성값이 없어서 초기 마운트후 렌더링이 되지않지만 하위컴포넌트에 prop은 전달
// props 업데이트에 문제 없음

function Greeting() {
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요.`}</p>;
}
//return 밖에서는 username을 사용하지 못하지만 useContext를 통해 해결
//Consumer컴포넌트를 작성하지 않고 아래와 같은 결과를 낸다.

function Greeting() {
  const username = useContext();
  return (
    <UserContext.Consumer>{(username) => <p>{`${username}님 안녕하세요`}</p>}</UserContext.Consumer>
  ); // Consumer에서 {username => ...} render props 스타일, children을 함수로 작성
}
// Consumer에서 시작하여 상위부모 컴포넌트를 참조해서 prop값을 받게 되며
// 만약 최상위 컴포넌트에서 Provider를 참조할 값이 없으면 초기 UserContext에서 정의된 객체값으로 prop을 받는다
