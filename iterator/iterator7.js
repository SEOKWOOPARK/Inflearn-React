function* minsu() {
  const myMsgList = ['안녕 나는 단비야', '만나서 반갑누', '안반갑냐', '표정 펴라', '피라고 했다'];

  for (const msg of myMsgList) {
    console.log('수지: ', yield msg);
  }
} //사가와 유사

function suji() {
  const myMsgList = ['', '안녕 나는 단비야', '반갑누', '...'];
  const gen = minsu();
  for (const msg of myMsgList) {
    console.log('민수:', gen.next(msg).value); //msg는 minsu의 yield 반환값
  }
} // 사가 미들웨어와 유사

suji();
