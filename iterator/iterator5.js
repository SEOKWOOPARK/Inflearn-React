function* f1() {
  yield 10;
  yield 20;
  yield 30;
}

for (const v of f1()) {
  console.log(v);
}

const arr = [...f1()];
console.log(arr); // [10, 20, 30]
// 이터러블객체일때 쓸 수 있는 반복문과 전개연산자
