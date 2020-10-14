function Timer({ initialTotalSeconds }) {
  const [state, dispatch] = useReducer(reducer, {
    hour: Math.floor(initialTotalSeconds / 3600),
    minute: Math.floor((initialTotalSeconds % 3600) / 60),
    second: initialTotalSeconds % 60,
  });

  const { hour, minute, second } = state;

  useEffect(() => {
    const id = setInterval(dispatch, 1000); // dispatch -> 불변
    return () => clearInterval(id);
  }, []);

  function reducer(state) {
    // 값 변경 파트
    const { hour, minute, second } = state;

    if (second) {
      return { ...state, second: second - 1 };
    } else if (minute) {
      return { ...state, minute: minute - 1, second: 59 };
    } else if (hour) {
      return { hour: hour - 1, minute: 59, second: 59 };
    } else {
      return state;
    }
  }

  // 여러개의 상태값을 참조하면서 값을 변경할때 -> useReducer
}
