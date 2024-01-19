const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b2743/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const inputString = input[0];

// console.log(inputString);
// console.log(count);

solution(inputString);

function solution(inputString) {
  console.log(inputString.length);
}
