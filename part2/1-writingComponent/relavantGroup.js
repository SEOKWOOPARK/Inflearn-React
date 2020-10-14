function Profile({ userId }) {
  const user = useUser(userId);
  const width = useWindowWidth(); //커스텀훅으로 분리했을 때....

  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
}

// 변수끼리 혹은 훅끼리 쓰기보다는 관련있는 그룹으로 연결해서 묶음
// 커스텀훅으로 만들기도 편하다
