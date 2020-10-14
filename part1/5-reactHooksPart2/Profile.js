import React, { useState, useEffect } from 'react';

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);
  const value = userId + 10;
  function func1() {
    console.log(userId);
  }
  useEffect(() => {
    func1(); // 너무 자주 변경될 수 있음 -> 의존성배열에 넣어도 자주 변경 -> useCallback 사용
    console.log(value);
    getUserApi(userId).then((data) => setUser(data));
  }, [userId, value]); //두번쨰 파라미터는 의존성 배열, 렌더링 될때마다 부수효과 함수를
  //호출하지 않고 이 의존성 배열이 업데이트 될때 다시 api호출시키기
  // 빈배열을 넣으면 mount되고 한 번만 호출
  // 그러면 이 배열에 무얼 넣나? 해당 컴포넌트의 속성값이나 상태값 혹은 지역변수, 지역함수
  // 외부함수(getUserApi 같이)는 굳이 넣지 않는다. useEffect의 오류는 주로 의존성배열과 관련.

  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

const USER1 = { name: 'mike', age: 23 };
const USER2 = { name: 'jane', age: 31 };

function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
