const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2차원배열/b2738/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const inputLine1 = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);
// console.log(inputLine1);
const row = inputLine1[0];
const col = inputLine1[1];
const testCaseArr = [];

for (let i = 1; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => +item)
  );
}
// console.log(testCaseArr);
solution(testCaseArr, row, col);

function solution(testCaseArr, row, col) {
  const result = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result.push(testCaseArr[i][j] + testCaseArr[i + row][j]);
    }
  }

  //   console.log(result);
  let printLine = "";
  let index = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      printLine += `${result[index]} `;
      index++;
    }
    console.log(printLine);
    printLine = "";
  }
}
