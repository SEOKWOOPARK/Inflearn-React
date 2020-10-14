function Parent(){
	const [selectedFruit, setSelectedFruit] = useState('apple');
	const [count, setCount] = useState(0);

	const onChangeFruit = useCallback( (fruit) => {
		setSelectedFruit(fruit);
		sendLog( {type: 'fruit change', value: fruit})
	}, []); // 처음 생성된 값으로 고정

	return (
		<div>
			<p>{`count: ${count}`}</p>
			<button onClick={() => setCount(count + 1)}>increase count</button>
			<SelectFruit selected={selectedFruit} onChange = {onChangeFruit}/>
		</div> 
		
	);
}