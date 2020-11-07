const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;
  // const delay = action.meta && action.meta.delay; 위아래 동일
  if (!delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);

  return function cancel() {
    clearTimeout(timeoutId);
  };
};
