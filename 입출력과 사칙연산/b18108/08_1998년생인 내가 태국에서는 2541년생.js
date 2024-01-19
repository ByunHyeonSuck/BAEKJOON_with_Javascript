const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./입출력과 사칙연산/b18108/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
// 입력값이 문자열이므로 item 을 그대로 받게함.
const newinput = input.split(" ").map((item) => +item);

solution(newinput[0]);

function solution(A) {
  console.log(A - 543);
}
