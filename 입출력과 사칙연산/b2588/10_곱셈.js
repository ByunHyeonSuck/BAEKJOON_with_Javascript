const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./입출력과 사칙연산/b2588/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input1 = input[0];
input2 = input[1];
// 입력값이 문자열이므로 item 을 그대로 받게함.
const newinput1 = input1.split(" ").map((item) => +item);
const newinput2 = input2.split(" ").map((item) => +item);

solution(newinput1[0], newinput2[0]);

function solution(A, B) {
  const num1 = parseInt(B / 100);
  const num2 = parseInt((B - 100 * num1) / 10);
  const num3 = B - 100 * num1 - 10 * num2;
  console.log(A * num3);
  console.log(A * num2);
  console.log(A * num1);
  console.log(A * B);
}
