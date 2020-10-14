function MyComponent() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    const id = setInterval(() => console.log(value1, value2), 1000);
    return () => clearInterval(id);
  }, [value1]);
  // value2를 의존성 배열에 넣지 않은 상황

  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
      <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
    </div>
  );
}

// 함수가 생성될 떄 함수의 지역변수 기억 -> 실행 컨텍스트
// value2가 의존성 배열에 없으면 value1이 바뀔때 함수는 value2가 바뀌더라도 이전 value2의 값을 기억한다
