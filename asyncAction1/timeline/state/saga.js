import { all, call, take, put, takeLeading } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}
//put call all => 부수효과
// put: 액션발생

export default function* () {
  //제너레이터
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
  //REQUEST_LIKE 발생 후 fetchData 실행
}

const a = take(types.REQUEST_LIKE);
const b = put(actions.setLoading(false));
const c = call(callApiLike);
console.log({ a, b, c });

const logResult = {
  // 해야 할 일의 객체, yield로 saga미들웨어에게 전달
  a: {
    TAKE: {
      pattern: 'timeline/REQUEST_LIKE',
    },
  },
  b: {
    PUT: {
      channel: null,
      action: {
        type: 'timeline/SET_LOADING',
        isLoading: false,
      },
    },
  },
  c: {
    CALL: {
      context: null,
      fn: callApiLike,
      args: [],
    },
  },
};
