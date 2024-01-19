const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./심화1/b2444/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const newinput = input[0].split(" ").map((item) => +item);
// console.log(newinput);

solution(newinput[0]);

function solution(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      result += "*";
    }

    console.log(result);
    result = "";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      result += "*";
    }

    console.log(result);
    result = "";
  }
}
