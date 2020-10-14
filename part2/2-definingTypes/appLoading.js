import React from 'react';
import User from './User'; // propTypes1 컴포넌트
export default function App() {
  return (
    <div>
      <p>실전 리액트</p>
      <User onChangeTitle={() => {}} male={true} type={'gold'} age={100} />
    </div>
  );
}
