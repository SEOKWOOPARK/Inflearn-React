import { useEffect, useState } from 'react';

export default function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []); // 매번 호출을 방지하고 처음 1번만 호출

  return mounted;
}
