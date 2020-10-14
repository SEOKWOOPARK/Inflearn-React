function SelectFruit( {selectedFruit, onChange}){
	//...
	return (
		<div>
			<Select selected={FRUITS} onChange={onChange} />
		</div>
		//컴포넌트 내에서 객체 정의하고 하위컴포넌트의 속성값으로 전달
	);
}

const FRUITS = [
	{name: "apple", price: 500},
	{name: 'banana', price: 1000},
	{name: 'orange', price: 1500}
]