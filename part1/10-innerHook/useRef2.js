import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20); // 이전 age값 저장

  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);

  const prevAge = prevAgeRef.current; // 이전 age를 저장했다가 useEffect에 의해서 갱신된다.
  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';
  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이변경
      </button>
    </div>
  );
}
