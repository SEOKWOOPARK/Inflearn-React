import React, { fowardRef, useState, useImperativeHandle } from 'react';

function Profile(_, ref) {
  const [name, setName] = useState('mike');
  const [age, setAge] = useState(0);
  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
    // 이 두개의 함수 반환값이 ref가 참조하는 값이 됨
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  );
}

export default fowardRef(Profile);

// 클래스형 컴포넌트의 상위컴포넌트는 ref를 통해서 자식 컴포넌트 메서드 호출 가능 => 의존성문제
