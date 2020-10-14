import React, { useState } from 'react';
import FriendPage from './container/FriendPage';

export default function App() {
  return (
    <div>
      <FriendPage />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

// 재사용할 수 있는 컴포넌트를 분리할 수 있는 기준
// 비즈니스 로직이 없고
// 상태값이 없다. mouseover 같은 ui효과의 상태값은 예외
