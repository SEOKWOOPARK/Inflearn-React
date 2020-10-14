const prevProps = {
  todos: [
    { title: 'fix bug', priority: 'high' },
    { title: 'meeting with jone', priority: 'low' },
  ],
  friends: [],
};

const nextProps = {
  todos: [
    { title: 'fix bug', priority: "'high" },
    { title: 'meeting with jone', priority: 'high' },
  ],
  friends: [],
};

prevProps.todos === nextProps.todos; // 한 번에 속성값 모두 비교(상태값을 불변 객체 관리)
const isEqual = prevProps.todos === nextProps.todos && prevProps.friends === nextProps.friends;
// 속성값 비교함수가 없을 때 얕은 비교



const prevTodos = [1, 2, 3];
const nextTodos = [...todos, 4]; //새로운 객체로 만들기

prevTodos === nextTodos // 변경 사항 바로 파악



