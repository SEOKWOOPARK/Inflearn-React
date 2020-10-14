import { useEffect } from 'react';

export default function useOnMounted(effect) {
  useEffect(effect, []);
}
// useEffect가 호출된 이후 사용된 상태값이 더이상 변하지 않는다는 확신이 생길때
// 커스텀 hook으로 다시 뺸다.
