const { default: MyComponent } = require('../1-writingComponent/componentFile');

MyComponent.propTypes = {
  menu: PropTypes.element,
  // 리액트 요소
  // <div> hello </div>
  //<SomeComponent />
  // 123 -> 거짓

  description: PropTypes.node,
  // number, string, array, element, ..
  // <SomeComponent /> ->참
  // 123 -> 참
  // 컴포넌트가 반환할 수 있는 모든 종류

  message: PropTypes.instanceOf(Message),
  // Message 클래스로 생성된 모든 객체
  // new Message() -> 참
  // new Car() -> 거짓

  name: PropTypes.oneOf(['jone', 'mike']),
  // 배열에 포함된 값 중 하나 만족
  // 이 경우에 'jone' 'mike'만 입력받아야만 한다
  //'jone' 참 'messy' 거짓

  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // 배열에 포함된 값 중 하나 만족
  // 123 참 'messy' 참

  ages: PropTypes.arrayOf(PropTypes.number),
  // 특정 타입만 포함함
  // [1, 5, 7] 참 ['a', 'b'] 거짓

  info: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.number,
  }),
  // 객체의 속성값 타입 정의
  // {color: 'red', weight: 123} 참 {color: 'red', weight: '123kg'} 거짓

  infos: PropTypes.objectOf(PropTypes.number),
  // 객체에서 모든 속성값의 타입 동일
  // {prop1: 123, prop2: 456} 참 {prop1: 'red', prop2: 456} 거짓
};
