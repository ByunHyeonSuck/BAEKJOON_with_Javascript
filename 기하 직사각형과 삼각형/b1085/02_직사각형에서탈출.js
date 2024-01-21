const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b1085/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const testCaseArr = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);

// console.log(testCaseArr);

solution(testCaseArr);

function solution(testCaseArr) {
  let xmin = 0;
  let ymin = 0;
  const x = testCaseArr[0];
  const y = testCaseArr[1];
  const w = testCaseArr[2];
  const h = testCaseArr[3];
  if (Math.abs(x - w) > Math.abs(x - 0)) {
    xmin = Math.abs(x - 0);
  } else {
    xmin = Math.abs(x - w);
  }

  if (Math.abs(y - h) > Math.abs(y - 0)) {
    ymin = Math.abs(y - 0);
  } else {
    ymin = Math.abs(y - h);
  }

  if (xmin > ymin) {
    console.log(ymin);
  } else {
    console.log(xmin);
  }
}
