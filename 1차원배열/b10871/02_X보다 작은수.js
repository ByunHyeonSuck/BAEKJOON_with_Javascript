const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b10871/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log(input);

const newinput1 = input[0].split(" ").map((item) => +item);

const inputSize = newinput1[0]; // 10
const standard = newinput1[1]; // 5
const testCaseArr = input[1].split(" ").map((item) => +item);

solution(testCaseArr, standard, inputSize);

function solution(testCaseArr, standard, inputSize) {
  let result = "";
  for (let i = 0; i < inputSize; i++) {
    if (testCaseArr[i] < standard) {
      result += `${testCaseArr[i]} `;
    }
  }
  console.log(result);
}
