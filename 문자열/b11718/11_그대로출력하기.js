const fs = require("fs");
const { title } = require("process");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b11718/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}
