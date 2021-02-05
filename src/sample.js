import React, {useState, useEffect} from 'react';

export default function App(){
	const [count, setCount] = useState(0);
	useEffect(() => {
		document.title = `updatingNumber: ${count}`;
	});
	return <button onClick={() => setCount(count + 1)}></button>
}