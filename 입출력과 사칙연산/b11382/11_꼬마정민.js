const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./입출력과 사칙연산/b11382/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const newinput = input[0].split(" ").map((item) => +item);

solution(newinput[0], newinput[1], newinput[2]);

function solution(A, B, C) {
  console.log(A + B + C);
}
