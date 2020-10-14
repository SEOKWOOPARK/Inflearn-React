import React, { useCallback, useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);
  const onSave = useCallback(() => saveToServer(name, age), [name, age]);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit onSave={onSave} setName={setName} setAge={setAge} />
      <p>{`v1: ${v1}`}</p>
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
  // <UserEdit onSave={() => saveToServer(name, age)} setName={setName} setAge={setAge} />
  // App이 렌더링될때마다 name,age가 실제로 바뀌지 않아도 하위컴포넌트 UserEdit의 속성값이 바뀐다.
  // 불필요한 렌더링 => useCallback사용
}

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log('UserEdit render');
  return null;
});

function saveToServer(name, age) {}
