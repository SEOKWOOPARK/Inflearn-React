import React from 'react';

function Title({ title }) {
  console.log('title render');
  return <p>{title}</p>;
} // 객체 비구조화 문법에 의해 props.title -> title

export default React.memo(Title);
//props.title이 변경되는 경우에만 Title 컴포넌트가 렌더링된다.
