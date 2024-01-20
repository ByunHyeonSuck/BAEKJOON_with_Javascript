const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/약수, 배수와 소수/b1978/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const count = +input[0];
const testCaseArr = input[1]
  .trim()
  .split(" ")
  .map((item) => +item);

// console.log(count);
// console.log(testCaseArr);

solution(testCaseArr, count);

function solution(testCaseArr, count) {
  let countPrimeNumber = 0;
  let index = 0;
  while (count > 0) {
    let divisor = [];

    for (let i = 1; i <= testCaseArr[index]; i++) {
      if (testCaseArr[index] % i == 0) {
        divisor.push(testCaseArr[index]);
      }
    }
    if (divisor.length == 2) {
      countPrimeNumber++;
    }
    index++;
    count--;
  }

  console.log(countPrimeNumber);
}
