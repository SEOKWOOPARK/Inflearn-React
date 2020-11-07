import { createReducer, createSetValueAction, setValueReducer } from '../../common/redux-helper';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';
const SET_VALUE = 'friend/SET_VALUE';

export const actions = {
  addFriend: (friend) => ({ type: ADD, friend }),
  removeFriend: (friend) => ({ type: REMOVE, friend }),
  editFriend: (friend) => ({ type: EDIT, friend }),
  setValue: createSetValueAction(SET_VALUE),
}; // action creator들을 객체로 전환

// export const addFriend = (friend) => ({ type: ADD, friend });
// export const removeFriend = (friend) => ({ type: REMOVE, friend });
// export const editFriend = (friend) => ({ type: EDIT, friend });
// export const setValue = createSetValueAction(SET_VALUE);

const INITIAL_STATE = {
  friends: [],
  ageLimit: MAX_AGE_LIMIT,
  showLimit: MAX_SHOW_LIMIT,
  name: 'mike',
}; //name 추가 시에 액션, 액션 creator도 추가해야 한다 -> redux-helper 컴포넌트 사용

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter((friend) => friend.id !== action.friend.id)),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex((friend) => friend.id === action.friend.id);
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  },
  [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
  [SET_VALUE]: setValueReducer,
});

export default reducer;
