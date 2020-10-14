function SelectFruit( {selectedFruit, onChange}){
	//...
	return (
		<div>
			<Select 
			options={[
				{name: 'apple', price: 500},
				{name: 'bananna', price: 1000},
				{name: 'orange', price: 1500},
			]}
			selected={selectedFruit}
			onChange={onChange}
			/>
		</div>
		//컴포넌트 내에서 객체 정의하고 하위컴포넌트의 속성값으로 전달
	);
}