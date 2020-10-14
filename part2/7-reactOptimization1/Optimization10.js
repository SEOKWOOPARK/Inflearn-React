function SelectFruit( {selectedFruit, onChange}){
	const [fruits, setFruits] = useState( ['apple', 'banana', 'orange']);
	const [newFruit, setNewFruit] = useState('');

	function addNewFruit(){
		// fruits.push(newFruit); 부적절한 예시
		
		setFruits([...fruits, newFruit]);
		setNewFruit(''); // 렌더링하는 주체
		//setNewFruit(fruits);  상태 변경함수를 써도 레퍼런스 바뀌는게 없어서 렌더링 불가
	}
	// memo 안에 <Select />를 넣어도 값변경, 레퍼런스 유지로 렌더링 불가
	return (
		<div>
			<Select  
			options={fruits}
			selected={selectedFruit} onChange={onChange} />
			<input 
			type="text" value={newFruit} onChange={e => setNewFruit(e.target.value)}/>
			<button onClick={addNewFruit}>추가하기</button>
		</div>
		
	);
} 

