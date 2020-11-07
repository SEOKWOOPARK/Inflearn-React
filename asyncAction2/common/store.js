import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';
import createSagaMiddleware from 'redux-saga';
import timelineSaga from '../timeline/state/saga';
import { all } from 'redux-saga/effects';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
}); // combineReducers => 복수의 리듀서를 합친다

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
//optional chaining

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
  yield all([timelineSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
