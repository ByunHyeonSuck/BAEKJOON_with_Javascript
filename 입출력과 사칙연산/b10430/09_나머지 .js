const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./입출력과 사칙연산/b10430/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
// 입력값이 문자열이므로 item 을 그대로 받게함.
const newinput = input.split(" ").map((item) => +item);

solution(newinput[0], newinput[1], newinput[2]);

function solution(A, B, C) {
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}
