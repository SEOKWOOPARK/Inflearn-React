function SelectFruit( {selectedFruit, onChange}){
	//...
	const [maxPrice, setMaxPrice] = useState(1000);
	return (
		<div>
			<Select  
			options={FRUITS.filter(item => item.price <= maxPrice)}
			selected={FRUITS} onChange={onChange} />
		</div>
		// filter 연산으로 새로운 배열생성 -> 렌더링
	);
} 

const FRUITS = [
	{name: "apple", price: 500},
	{name: 'banana', price: 1000},
	{name: 'orange', price: 1500}
]