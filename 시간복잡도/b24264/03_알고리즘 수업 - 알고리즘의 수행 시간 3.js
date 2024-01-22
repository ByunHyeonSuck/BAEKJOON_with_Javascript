const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/시간복잡도/b24264/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = +input[0];

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  console.log(testCaseArr ** 2);
  console.log(2);
}
