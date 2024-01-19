const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2차원배열/b2566/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = [];
for (let i = 0; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => +item)
  );
}
// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  let max = 0;
  let row = 0;
  let col = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (testCaseArr[i][j] >= max) {
        max = testCaseArr[i][j];
        row = i;
        col = j;
      }
    }
  }

  console.log(max);
  console.log(`${row + 1} ${col + 1}`);
}
