function TodoList({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((item) => item.done));
  function onChangeName(key, name) {
    setDoneLinst(doneList.map((item) => (item.key === key ? { ...item, name } : item))); // name을 수정하면 부모컴포넌트의 속성값과 안맞다.
  }
  //...
}
