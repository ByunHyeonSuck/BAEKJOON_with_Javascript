const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b2739/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input1 = input[0];

const newinput1 = input1.split(" ").map((item) => +item);

solution(newinput1[0]);

function solution(num1) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num1} * ${i} = ${num1 * i}`);
  }
}
