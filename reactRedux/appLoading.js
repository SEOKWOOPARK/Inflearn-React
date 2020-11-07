import React from 'react';
import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';
import { Provider } from 'react-redux';
import store from './common/store';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <FriendMain />
        <TimelineMain />
      </div>
    </Provider>
  ); // Provider => 리액트 액션을 받아서 이벤트를 하위컴포넌트에 전달
  //FriendMain 컴포넌트 수정
}
