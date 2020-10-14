function Profile({ userId }) {
  const [user, setUser] = useState(0);
  const fetchAndSetUser = useCallback(
    async function (needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId],
  ); // useCallback으로 Profile이 렌더링 될때마다가 아닌 userId가 변경될 때만 렌더링 시킨다.

  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]); // 함수안에서 속성값을 사용하므로 의존성 배열에 해당함수를 넣는다

  if (!user) {
    return <h1>로딩 중...</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`캐시: ${user.cash}`}</p>
      <p>{`계정 생성일: ${user.createdAt}`}</p>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
      <UserDetail user={user} />
    </div>
  );
}
