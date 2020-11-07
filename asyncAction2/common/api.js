// export function callApiLike() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// }

export default function cappApiLike() {
  return new Promise((resolve, rejcet) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve();
      } else {
        rejcet('callApiLike 실패');
      }
    });
  });
} // 예외상활 발생
