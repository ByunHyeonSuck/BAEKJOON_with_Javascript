const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b10818/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log(input);

const newinput1 = input[0].split(" ").map((item) => +item);

const inputSize = newinput1[0]; // 5
const testCaseArr = input[1].split(" ").map((item) => +item);
console.log(testCaseArr);

solution(testCaseArr, inputSize);

function solution(testCaseArr, inputSize) {
  let max = testCaseArr[0];
  let min = testCaseArr[0];
  testCaseArr.map((item) => {
    if (item >= max) {
      max = item;
    }
    if (item <= min) {
      min = item;
    }
  });

  console.log(`${min} ${max}`);
}
