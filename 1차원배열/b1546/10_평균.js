const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b1546/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// console.log(input);

const inputLen1 = input[0].split(" ").map((item) => +item);
const count = inputLen1[0];
// console.log(count);

testCaseArr = input[1].split(" ").map((item) => +item);
// console.log(testCaseArr);

solution(testCaseArr, count);

function solution(testCaseArr, count) {
  let newArr = [];
  let maxScore = 0;
  for (let i = 0; i < count; i++) {
    if (maxScore < testCaseArr[i]) {
      maxScore = testCaseArr[i];
    }
  }
  // console.log(maxScore);
  for (let i = 0; i < count; i++) {
    newArr.push((testCaseArr[i] / maxScore) * 100);
  }

  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += newArr[i];
  }
  console.log(sum / count);
}
