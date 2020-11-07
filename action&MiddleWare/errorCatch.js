const reportCrash = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    //..
    // 리듀서에서 에러 발생했을 때 서버로 예외정보 전송
  }
};
