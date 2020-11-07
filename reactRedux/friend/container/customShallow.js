import { useSelector, shallowEqual } from 'react-redux';

function useMySelector(selector) {
  return useSelector(selector, shallowEqual);
}

function MyComponent() {
  const [value1, value2] = useMySelector((state) => [state.value1, state.value2]);
  const value3 = useMySelector((state) => state.value3); // 배열로 안쓰면 shallow함수가 value3 뿐만 아니라 모든 속성값을 다비교
  const [value4] = useMySelector((state) => [state.value4]);
} // 값이 한 개만 반환할 때도 배열로 쓰는걸 권장

// 상태값을 여러개 쓰기위해 useSelect로 커스텀 훅 만들기
