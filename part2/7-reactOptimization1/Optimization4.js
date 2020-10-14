function Parent(){
	const [selectedFruit, setSelectedFruit] = useState('apple');
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>{`count: ${count}`}</p>
			<button onClick={() => setCount(count + 1)}>increase count</button>
			<SelectFruit selected={selectedFruit} onChange = { (fruit) => setSelectedFruit(fruit)}/>
		</div>
		// 하위 컴포넌트에서 memo를 사용하고 selected속성값이 바뀌지 않아도 
		// onChange에 함수가 들어와서 새로운 상태값이 들어오면 렌더링이 된다
	);
}