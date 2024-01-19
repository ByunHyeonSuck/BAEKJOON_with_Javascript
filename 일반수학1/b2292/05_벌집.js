const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./일반수학1/b2292/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const count = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);

// console.log(count);
solution(count);

function solution(count) {
  let k = 1;
  let load = 1;
  while (count[0] > load) {
    load += 6 * k;
    k++;
  }
  console.log(k);
}
