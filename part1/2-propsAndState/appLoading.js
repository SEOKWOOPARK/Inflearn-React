import React from 'react';
import Counter from './Counter';

export default function App() {
  return (
    <React.Fragment>
      <p>hello</p>
      <Counter />
    </React.Fragment>
  ); //Fragment내에선 위에서 아래 태그가 순서, 빈괄호로 써도 같은기능

  // return [<p key = {1}>hello</p>, <p key = {2}>world</p>];
  // 배열 리턴시에 key값이 필수이고 이것이 DOM 연산이 원활해진다
}
