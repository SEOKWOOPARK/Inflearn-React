function* f1() {
  console.log('f1-1');
  yield 10;
  console.log('f1-2');
  yield 20;
  console.log('f1-3');
  return 'finished';
}

const gen = f1();
console.log(gen[Symbol.iterator]() === gen); // 스스로를 호출 ,true
//제너레이터는 iterable한 iterator객체
