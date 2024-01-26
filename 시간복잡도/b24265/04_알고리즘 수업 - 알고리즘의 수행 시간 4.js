const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/시간복잡도/b24265/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = +input[0];

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  let count = 0;
  for (let i = 1; i <= testCaseArr; i++) {
    for (let j = i + 1; j <= testCaseArr; j++) {
      count++;
    }
  }
  console.log(count);
  console.log((testCaseArr * (testCaseArr - 1)) / 2);
  console.log(2);
}
