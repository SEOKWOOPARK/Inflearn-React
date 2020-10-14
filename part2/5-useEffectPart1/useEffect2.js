import React, { useState, useEffect } from 'react';
import useOnMounted from './useOnMounted';

export default function App() {
  return (
    <div>
      실전 리액트 <Profile />
    </div>
  );
}

function Profile({ userId }) {
  const [user, setUser] = useState();
  // const [needDetail, setNeedDetail] = useState(false);
  useOnMounted(() => fetchUser(userId).then((data) => setUser(data)));
  // useEffect(() => {
  //   fetchUser(userId, needDetail).then((data) => setUser(data));
  // }, [userId, needDetail]);

  console.log(user);
  return null;
}

function fetchUser() {}

// 해당 컴포넌트가 렌더링 될때마다 api 호출을 담은 부수함수가 실행된다 => 비효율 발생
// 의존성 배열 => 빈 배열(마운트 후 한번 호출), 근데 id변경되면 문제

// 부수함수의 상태값으로 쓰인 변수들은 의존성 배열로..
// eslint로 의존성 배열 에러를 알려준다.
