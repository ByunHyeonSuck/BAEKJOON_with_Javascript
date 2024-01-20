const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/약수, 배수와 소수/b2581/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const min = +input[0];
const max = +input[1];

// console.log(max);
// console.log(min);

solution(max, min);

function solution(max, min) {
  let countPrimeNumber = 0;
  const primeNumberList = [];
  let sum = 0;
  while (max >= min) {
    let divisor = [];

    for (let i = 1; i <= min; i++) {
      if (min % i == 0) {
        divisor.push(i);
      }
    }
    if (divisor.length == 2) {
      primeNumberList.push(min);
    }

    min++;
  }

  for (let i = 0; i < primeNumberList.length; i++) {
    sum += primeNumberList[i];
  }
  if (primeNumberList.length == 0) {
    console.log(-1);
  } else {
    console.log(sum);
    console.log(primeNumberList[0]);
  }
}
