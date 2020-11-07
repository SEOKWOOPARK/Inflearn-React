import { createSelector } from 'reselect';

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;
//데이터 불러오기

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log('getFriendsWithAgeLimit');
    return friends.filter((item) => item.age <= ageLimit);
  }, //반환된 값에 대하여 필터 적용
);
//불러온 데이터(friends,ageLimit) 필터링하는 선택자 함수, 조건은 변경됐을 때이며 똑같으면 그대로 사용

export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => {
    console.log('getFriendsWithAgeShowLimit');
    return friendsWithAgeLimit.slice(0, showLimit);
  },
); // createSelector로 선택자함수 생성-> 메모이제이션 기능
