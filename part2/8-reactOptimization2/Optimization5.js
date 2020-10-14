import React, { useState, useEffect } from 'react';

export default function App(){
	const [flag, setFlag] = useState(true);

	useEffect( () => {
		setTimeout( () => setFlag( prev => !prev), 1000);
	});

	const fruits = flag ? FRUITS_1 : FRUITS_2;

	return (
		<div>
			{fruits.map( (item, index) => (
				<p key={index}>{item}</p>
			))}
		</div>
	); // key에 index. 이 경우는 배열의 끝이나 처음이 수정될 떄가 적합
	// 중간에서 수정 추가될 경우 id값을 key에 넣는다
}

const FRUITS_1 = ['사과', '바나나'];
const FRUITS_2 = ['사과', '파인애플', '바나나'];