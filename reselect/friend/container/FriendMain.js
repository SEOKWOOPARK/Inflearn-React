import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { addFriend, setAgeLimit, setShowLimit } from '../state';
import {
  getAgeLimit,
  getShowLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
} from '../state/selector';
import FriendList from '../component/FriendList';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

export default function FriendMain() {
  const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] = useSelector(
    (state) => [
      getAgeLimit(state),
      getShowLimit(state),
      getFriendsWithAgeLimit(state),
      getFriendsWithAgeShowLimit(state),
    ],
    shallowEqual,
  ); // 바로 아래도 같은 방식

  // const ageLimit = useSelector(getAgeLimit);
  // const showLimit = useSelector(getShowLimit);
  // const friendsWithAgeLimit = useSelector(getFriendsWithAgeShowLimit);
  // const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);

  // const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] = useSelector(
  //   (state) => {
  //     const { ageLimit, showLimit, friends } = state.friend;
  //     const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
  //     // 액션마다 filter호출
  //     return [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeLimit.slice(0, showLimit)];
  //   }, // useSelector -> 액션마다 선택자 함수(파라미터 첫 번째) , 리턴값 기준 렌더링
  //   shallowEqual,
  // );

  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  }

  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기(연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
// 리덕스 원본데이터 배열 그대로, 필터링은 리액트 컴포넌트에서 실행
