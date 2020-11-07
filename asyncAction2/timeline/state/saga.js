import { all, call, debounce, put, takeLeading } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield put(actions.setValue('error', ''));
  try {
    yield call(callApiLike);
  } catch (error) {
    yield put(actions.setValue('error', error));
    yield put(actions.addLike(action.timeline.id, -1)); //에러 발생시 다시 id 1씩 감소
  }
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export function* trySetText(action) {
  yield put(actions.setCalue('text', action.text));
}

export default function* () {
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}

export default function* () {
  yield all([
    takeLeading(types.REQUEST_LIKE, fetchData),
    debounce(500, types.TRY_SET_TEXT, trySetText), // 0.5초내 같은 액션은 무시. 0.5초 대기하고 다른 액션없을 때 해당함수 실행
  ]);
}
// debounce => 비슷한 액션함수 여러번 연속일 떄 처음이나 마지막 한 번만 호출
