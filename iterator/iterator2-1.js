function* f1() {
  console.log('f1-1');
  yield 10;
  console.log('f1-2');
  yield 20;
  console.log('f1-3');
  return 'finished';
}

const gen = f1(); // 호출 -> 제너레이터 객체 반환
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// f1-1
// { value: 10, done: false}
// f1-2
// { value: 20, done: false}
// f1-3
// { value: 'finished', done: true}

// 다음 조건을 만족하는 객체가 iterator
// next() 메서드 -> value와 done 속성값을 가진 객체 반환
// done: 작업이 모두 끝났을 때 true

// 다음 조건을 만족하는 객체가 iterable
// Symbol.iterator 속성값으로 함수를 갖는다.
// 이 함수를 호출하면 iterator를 반환
