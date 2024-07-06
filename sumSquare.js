const sumSquares = (arr) => {
  if (!arr) return 0;
  const arr1 = arr.flat(Infinity);
  let ans = 0;
  for (let i = 0; i < arr1.length; i++) {
    ans += arr1[i] * arr1[i];
  }
  return ans;
};

// method 2
const sumSquares1 = (ar) =>
  ar.reduce(
    (acc, val) => (acc += Array.isArray(val) ? flatArray(val) : val * val),
    0
  );

var l = [1, 2, 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(sumSquares1(l)); // 100 + 100 + 100 + 100 = 400
