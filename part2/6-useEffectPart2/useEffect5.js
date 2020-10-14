function MyComponent({ onClick }) {
  useEffect(() => {
    window.addEventListener('click', () => {
      onClick();
    });
  }, [onClick]);
}

// 속성값으로 함수가 전달되는데, 함수가 자주바뀌면 부수함수 계속 호출
