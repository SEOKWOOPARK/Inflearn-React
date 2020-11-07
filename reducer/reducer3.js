import produce from 'immer'; // 불변객채를 위한 편리한 라이브러리

const person = { name: 'mike', age: 22 };
const newPerson = produce(person, (draft) => {
  draft.age = 32;
}); // 파라미터 (변경하고 싶은 객체, 상태값 변경사항을 담은 함수)
