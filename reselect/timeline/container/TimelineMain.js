import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList.js';

export default function TimelineMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0); // 상태값 변경함수가 나타날때마다 해당 컴포넌트를 렌더링시킨다
  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => forceUpdate()); // 액션처리후 컴포넌트 렌더링하기
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      if (prevTimelines !== timelines) {
        forceUpdate();
      }
      prevTimelines = timelines;
    });
    return () => unsubscribe();
  }, []); //수정된 경우, 데이터가 실제 변경된 경우만 렌더링

  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  } //데이터 가져와서 추가하기

  console.log('TimelineMain render');

  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
