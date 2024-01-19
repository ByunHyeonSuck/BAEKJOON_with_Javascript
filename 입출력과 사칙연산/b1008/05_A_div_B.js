const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./입출력과 사칙연산/b1008/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
const newinput = input.split(" ").map((item) => +item);

solution(newinput[0], newinput[1]);

function solution(A, B) {
  console.log(A / B);
}
