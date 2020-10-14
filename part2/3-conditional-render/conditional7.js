function Parent({ user }) {
  return (
    <div>
      <p>Parent</p>
      <Child user={user} />
      {/* { user && <Child user={user} />} user의 상태에 따라 Child가 생성 삭제 반복*/}
    </div>
  );
}

function Child({ user }) {
  const [v, setV] = useState(0);

  if (user) {
    return null;
  }

  reutrn(
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>,
  );
}
