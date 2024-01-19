const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./조건문/b1330/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
const newinput = input.split(" ").map((item) => +item);

solution(newinput[0], newinput[1]);

function solution(A, B) {
  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else {
    console.log("==");
  }
}
