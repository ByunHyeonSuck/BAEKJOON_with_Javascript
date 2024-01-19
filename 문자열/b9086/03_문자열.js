const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b9086/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const count = +input.shift();
const testCaseArr = input;

// console.log(count);

// console.log(testCaseArr);

solution(testCaseArr, count);

function solution(testCaseArr, count) {
  for (let i = 0; i < count; i++) {
    let stringlen = testCaseArr[i].trim().length;
    console.log(`${testCaseArr[i][0]}${testCaseArr[i][stringlen - 1]}`);
  }
}
