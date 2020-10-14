useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);

// 부수함수는 리턴 값의 타입이 함수이다
// async함수는 리턴값이 Promise객체

useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }
  fetchAndSetUser();
}, [userId]);

// asyncn함수를 따로 선언해서 사용하면 부수함수안에 쓸 수 있다.
