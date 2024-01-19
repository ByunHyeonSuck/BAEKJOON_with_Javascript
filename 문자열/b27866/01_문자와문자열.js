const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b27866/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const inputString = input[0];
const count = Number(input[1]);

// console.log(inputString);
// console.log(count);

solution(inputString, count);

function solution(inputString, count) {
  console.log(inputString[count - 1]);
}
