function MyComponent(props) {
  //...
}

function isEqual(prevProps, nextProps) {
  //...
}

React.memo(MyComponent, isEqual);
// 속성값 이전 이후 비교함수 호출해서 렌더링 실행
// true 반환 -> 이전 렌더링 데이터 재사용
// false 반환 -> 가상돔업데이트 및 비교 -> 실제 돔 반영
// 비교함수 없으면 얕은비교
// memo(컴포넌트) 꼴이 아니면 false가 반환된다고 본다 -> 속성값이 그대로여도 부모컴포넌트가 바뀌면 하위컴포넌트도 다시 렌더링