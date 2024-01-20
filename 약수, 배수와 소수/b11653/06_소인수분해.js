const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/약수, 배수와 소수/b11653/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const testCase = +input[0];

// console.log(testCase);

solution(testCase);

function solution(testCase) {
  const primeNumberList = [];
  let i = 0;
  let divisor = []; // 약수
  const primeList = [];
  while (i <= testCase) {
    for (i = 1; i <= testCase; i++) {
      if (testCase % i == 0) {
        divisor.push(i);
        let isPrime = [];
        for (let j = 1; j <= i; j++) {
          if (i % j == 0) {
            isPrime.push(j);
          }
        }
        if (isPrime.length == 2) {
          primeList.push(i);
        }
      }
    }
  }

  //   console.log(primeList);

  let index = 0;
  while (testCase != 1) {
    if (testCase % primeList[index] == 0) {
      testCase /= primeList[index];
      console.log(primeList[index]);
    } else {
      index++;
    }
  }

  // 내코드는 약수부터 찾아서 약수내에서 소수를 고르고 다시 소수를 통해 계산하므로 너무 많은 시간을 소비하게 된다.

  // const result = [];
  // for (let i = 2; i <= testCase; i++) {
  //   while (testCase % i == 0) {
  //     testCase /= i;
  //     result.push(i);
  //   }
  //   if (testCase == 1) {
  //     break;
  //   }
  // }

  // result.forEach((item) => console.log(item));
}
