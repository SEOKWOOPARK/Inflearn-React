import { createStore, combineReducers } from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
}); // combineReducers => 복수의 리듀서를 합친다

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
//optional chaining

export default store;
