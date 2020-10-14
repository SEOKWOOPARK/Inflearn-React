MyComponent.propTypes = {
  //...
};
// 속성값 타입 정의, 객체 입력

export default function MyComponent({ prop1, prop2 }) {
  //...
} // 함수 이름이 있어야 개발자도구 디버깅이 수월

const COLUMNES = [
  { id: 1, name: 'phoneNumber', width: 200, color: 'white' },
  { id: 1, name: 'city', width: 100, color: 'grey' },
];

const URL_PRODUCT_LIST = '/api/products';
//변수는 대문자로 해주는게 컴포넌트내 변수구분과 가독성에 도움

function getTotalPrice({ price, total }) {
  //...
}
//컴포넌트 이외의 변수 및 함수는 컴포넌트 이후로 작성
