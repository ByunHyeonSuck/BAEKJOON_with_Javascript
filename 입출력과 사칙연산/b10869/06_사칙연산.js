const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./입출력과 사칙연산/b10869/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
const newinput = input.split(" ").map((item) => +item);

solution(newinput[0], newinput[1]);

function solution(A, B) {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  // 나누기 값인 몫이 소수점까지 나와서 parseint로 정수만 나오게 함
  console.log(parseInt(A / B));
  console.log(A % B);
}
