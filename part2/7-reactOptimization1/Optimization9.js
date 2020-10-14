function SelectFruit( {selectedFruit, onChange}){
	//...
	const fruits = useMemo( () => FRUITS.filter(item => item.price <= maxPrice),[maxPrice]);
	// 필요시에만 변경, 의존성 배열에 maxPrice 변경때
	return (
		<div>
			<Select  
			options={fruits}
			selected={FRUITS} onChange={onChange} />
		</div>
		
	);
} 

const FRUITS = [
	{name: "apple", price: 500},
	{name: 'banana', price: 1000},
	{name: 'orange', price: 1500}
]