import React, { useEffect, useState } from 'react';

export default function App({ user }){
	return (
		<div>
			<p>사용자 상세 정보</p>
			<UserDetail key={user.id} user={user} />
		</div>
		// id를 key로 넣어서 user가 변경되었을 떄 UserDetail의 상태값을 초기화
	);
}

function UserDetail({ user }){
	//...
}

//key를 이용해 컴포넌트 언마운트시키기