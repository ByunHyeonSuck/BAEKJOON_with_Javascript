const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./일반수학1/b2903/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const count = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);

// console.log(count);
solution(count);

function solution(count) {
  let loopcount = count;
  let start = 2;
  while (loopcount > 0) {
    start = start + (start - 1);
    loopcount--;
  }
  console.log(start ** 2);
}
