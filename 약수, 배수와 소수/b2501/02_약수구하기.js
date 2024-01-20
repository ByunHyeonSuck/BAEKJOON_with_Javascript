const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/약수, 배수와 소수/b2501/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);

// console.log(testCaseArr);

solution(testCaseArr);

function solution(testCaseArr) {
  const num1 = testCaseArr[0];
  const divisorArr = [];

  for (let i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
      divisorArr.push(i);
    }
  }
  if (divisorArr.length >= testCaseArr[1]) {
    console.log(divisorArr[testCaseArr[1] - 1]);
  } else {
    console.log(0);
  }
}
