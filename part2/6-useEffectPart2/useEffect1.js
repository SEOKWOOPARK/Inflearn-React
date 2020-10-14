function Profile({ userId }) {
  const [user, setUser] = useState();
  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }

  useEffect(() => {
    if (!user || user.id !== userId) {
      fetchAndSetUser(false);
    }
  });

  // 속성값이 함수가 의존성 배열에 들아가면 부모컴포넌트에서 이 부분을 useCallback으로 커버해야 한다.

  // 의존성 배열을 안쓰는 대신 부수함수에서 조건부 조절로 useCallback 대체할 수 있다. => 부수함수의 변수들은 가장 최근의 값 참조
  //
}
