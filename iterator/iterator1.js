function* f1() {
  yield 10;
  yield 20;
  return 'finished';
}

const gen = f1(); // 호출 -> 제너레이터 객체 반환
