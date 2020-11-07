import React from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

export default function FriendMain() {
  const friends = useSelector((state) => state.friend.friends);
  //state: 리덕스 상태값, 함수의 반환값이 곧 useSelector 반환값
  // 리덕스 액션 후 반환값의 이전과 비교하여 변경되면 컴포넌트 렌더링

  const [friends, friends2] = useSelector(
    (state) => [state.friend.friends, state.friend.friends2],
    shallowEqual,
  );
  // 여러 개의 상태값은 배열이나 객체스타일로 반환 가능, 그러나 배열이 매번 생성되서 배열값들이 안바뀌어도 리덕스액션마다 컴포넌트렌더링
  // 보완을 위해 리덕스의 shallowEqual 함수를 두 번째 파라미터

  const dispatch = useDispatch(); //리덕스 훅으로 store를 안쓰고 dispatch쓰기
  // 미들웨어 추가시 변경되고 그이외엔 변동 제로
  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
    // store.dispatch(addFriend(friend));
  }

  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
