function* naturalNumbers() {
  let v = 1;
  while (true) {
    yield v++;
  }
}
// 일반함수와 달리 실행을 중간에 pause 가능 => 외부에 실행권한 부여
