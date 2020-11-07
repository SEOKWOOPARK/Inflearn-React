const myMiddleware = (store) => (next) => (action) => next(action);
// 마지막 함수에서 store, next를 사용
