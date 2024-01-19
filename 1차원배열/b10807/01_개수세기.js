const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b10807/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const length = input[0].split(" ").map((item) => +item);
const testCaseArr = input[1].split(" ").map((item) => +item);
const num = input[2].split(" ").map((item) => +item);

solution(testCaseArr, num[0]);

function solution(testCaseArr, num) {
  let count = 0;
  for (let i = 0; i < testCaseArr.length; i++) {
    if (testCaseArr[i] == num) {
      count++;
    }
  }

  console.log(count);
}
