const FRIENDS = [
  { name: '벵거', age: 55 },
  { name: '퍼거슨', age: 58 },
  { name: '안첼로티', age: 41 },
  { name: '무리뉴', age: 43 },
];

let nextId = 0;

export function getNextFriend() {
  return { ...FRIENDS[nextId % 4], id: nextId++ };
}
