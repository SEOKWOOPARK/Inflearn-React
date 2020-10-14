function MyComponent({ onClick }) {
  const onClickRef = useRef();

  useEffect(() => {
    onClickRef.current = onClick;
  });

  useEffect(() => {
    window.addEventListener('click', () => {
      onClick.current();
    });
  });
}
// useRef 적극활용
// 부수함수에서 쓰인 ref객체는 의존성배열에 안써도 된다

function MyComponent2({ onClick }) {
  const onClickRef = useRef();
  onClickRef.current = onClick;
}
// 해당 컴포넌트의 렌더링이 취소됐을 때, ref객체에 이상한 값이 들어갈 수 있다. 따라서 부수함수에 넣는게 필수
// 단 concurrent모드가 아니면 이상없다
