store.dispatch({ type: 'todo/ADD', title: '영화 보기', priority: 'high' });
store.dispatch({ type: 'todo/REMOVE', id: 123 });
store.dispatch({ type: 'todo/REMOVE_ALL' });
// dispatch: 어떤 액션이 발생했음을 리덕스에게 알린다.
// 원하는 데이터를 전달할 수 있다
// 각 type값은 유일해야 한다.
