// 이 문제는 readfile싱크로 못풀어서 readline으로 물어야된다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const newinput1 = input[0].split(" ").map((item) => +item);
  const newinput2 = input[1].split(" ").map((item) => +item);
  solution(newinput1, newinput2);
  process.exit();
});

function solution(A, B) {
  if (A > 0 && B > 0) {
    console.log("1");
  } else if (A < 0 && B > 0) {
    console.log("2");
  } else if (A < 0 && B < 0) {
    console.log("3");
  } else {
    console.log("4");
  }
}
