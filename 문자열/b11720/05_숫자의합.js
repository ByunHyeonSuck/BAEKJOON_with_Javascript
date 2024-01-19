const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b11720/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const len = +input[0];
const testCaseArr = input[1];
// console.log(len);

solution(testCaseArr, len);

function solution(testCaseArr, len) {
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Number(testCaseArr[i]);
  }

  console.log(sum);
}
