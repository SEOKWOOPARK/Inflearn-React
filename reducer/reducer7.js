function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SAY_HELLO:
        const random = Math.floor(Math.random() * 10 + 1);
        draft.msg = `안녕하세요, ${action.name}님의 행운의 숫자는 ${random}입니다.`;
        break; // 입력이 같으면 출력도 같아야 -> 출력으로 random 사용 불가
      // action을 만들 때 random을 넣는다.

      case INCREMENT:
        callApi({ url: './sendActionLog', data: action });
        draft.value += 1;
        break;
      // api호출함수는 리듀서에서 쓰면 안된다
    }
  });
}
// 리듀서는 부수효과 없이 순수함수로 작성한다.
