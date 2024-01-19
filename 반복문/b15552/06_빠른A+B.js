const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b15552/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log("input : ", input);

const count = input[0].split(" ").map((item) => +item);
const textCaseArr = [];
for (let i = 0; i < count; i++) {
  textCaseArr.push(input[i + 1].split(" ").map((item) => +item));
}

solution(count, textCaseArr);

function solution(count, textCaseArr) {
  for (let i = 0; i < count; i++) {
    console.log(textCaseArr[i][0] + textCaseArr[i][1]);
  }
}
