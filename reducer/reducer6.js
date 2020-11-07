function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_PEOPLE:
        // draft.selectedPeople = draft.peopleList.find((item) => item.id === action.id);
        draft.selectedPeople = action.id; // id값만 참조
        break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find((item) => item.id === action.id);
        people.name = action.name; // name 수정시 people 객체생성
        break;
      // selectedPeople -> people로 바뀌기 때문에 selectedPeople은 레퍼런스 유지
    }
  });
}
