import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';

export default function FriendMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0); // 상태값 변경함수가 나타날때마다 해당 컴포넌트를 렌더링시킨다
  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => forceUpdate()); // 액션처리후 컴포넌트 렌더링하기
  //   return () => unsubscribe();
  // }, []); // 이 경우 친구데이터가 변경된 경우에만 호출해야 한다

  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if (prevFriends !== friends) {
        forceUpdate();
      }
      prevFriends = friends;
    });
    return () => unsubscribe();
  }, []); //수정된 경우, 데이터가 실제 변경된 경우만 렌더링

  function onAdd() {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  } //데이터 가져와서 추가하기

  console.log('FriendMain render');

  const friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
