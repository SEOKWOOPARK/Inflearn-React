import { useState, useDebugValue } from 'react';

export default function useCahngeAppState() {
  const [state, setState] = useState(STATE_START);
  const next = () => setState(state === STATE_STOP ? STATE_START : state + 1);
  useDebugValue(state === STATE_START ? 'start' : state === STATE_RUNNING ? 'running' : 'stop');
  return [state, next];
}

export const STATE_START = 0;
export const STATE_RUNNING = 1;
export const STATE_STOP = 2;

//개발자도구 풍부한 정보, 디버깅 잡기 좋다
