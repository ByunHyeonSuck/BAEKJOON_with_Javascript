const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2차원배열/b2563/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const count = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);
const testCaseArr = [];
for (let i = 1; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => +item)
  );
}
// console.log(count);
// console.log(testCaseArr);
// console.log(testCaseArr[0][0]);
// console.log(testCaseArr[1][0]);
// let matrix123 = Array.from({ length: 10 }, () => Array(5));
// console.log(matrix123);
// matrix123[0][1] = 1;
// console.log(matrix123[0][0]);
solution(testCaseArr, count);

function solution(testCaseArr, count) {
  // 3x3 크기의 2차원 배열 생성
  let matrix = Array.from({ length: 100 }, () => Array(100).fill(0));
  let count1 = 0;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        matrix[testCaseArr[i][0] + j][testCaseArr[i][1] + k] = 1;
      }
    }
  }

  for (let j = 0; j < 100; j++) {
    for (let k = 0; k < 100; k++) {
      if (matrix[j][k] == 1) {
        count1++;
      }
    }
  }

  // console.log(matrix);
  console.log(count1);
}
