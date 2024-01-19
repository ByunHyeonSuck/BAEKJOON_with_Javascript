const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/약수, 배수와 소수/b5086/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);
// console.log(testCaseArr);

solution(testCaseArr[0], testCaseArr[1], testCaseArr[2]);

function solution(A, B, V) {
  //   let sumDay = 0;
  //   let lostDate = 0;
  //   while (sumDay < V) {
  //     sumDay += A;
  //     lostDate++;
  //     if (sumDay >= V) {
  //       break;
  //     } else {
  //       sumDay -= B;
  //     }
  //   }

  //   console.log(lostDate);

  // while문을 사용하면 시간초과되므로 시간복잡도를 낮게 하는 풀이방법을 찾아야된다. 수학적 사고를 논하는 문제.

  console.log(Math.ceil((V - B) / (A - B)));
}
