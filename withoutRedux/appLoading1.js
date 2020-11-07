import React from 'react';
import { addTimeline, removeTimeline, editTimeline, increaseNextPage } from './timeline/state';
import { addFriend, removeFriend, editFriend } from './friend/state';
import store from './common/store';

store.dispatch(addTimeline({ id: 1, desc: '코딩은 즐거워' }));
store.dispatch(addTimeline({ id: 2, desc: '리덕스 좋아' }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '리덕스 너무 좋아' }));
store.dispatch(removeTimeline({ id: 1, desc: '코딩은 즐거워' }));

store.dispatch(addFriend({ id: 1, desc: '무리뉴' }));
store.dispatch(addFriend({ id: 2, desc: '로저스' }));
store.dispatch(editFriend({ id: 2, desc: '벵거' }));
store.dispatch(removeFriend({ id: 1, desc: '무리뉴' }));

export default function App() {
  return <div>실전 리액트</div>;
}
