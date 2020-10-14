function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [count]);
  // 의존성배열에 상태값을 넣어서 예전 값을 기반으로 새로운 값을 계산하는 경우
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onClick() {
      setCount((prev) => prev + 1);
    }
    // 부수함수에 의존성 배열을 안쓰는 대신 setCount내에 함수를 넣어서 연산한다

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  });
}
