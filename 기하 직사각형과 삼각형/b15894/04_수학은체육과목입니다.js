const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b15894/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const testCaseArr = +input[0];

// console.log(testCaseArr);

solution(testCaseArr);

function solution(testCaseArr) {
  console.log(4 * testCaseArr);
}
