const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/시간복잡도/b24267/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = +input[0];

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  //   let count = 0;
  //   for (let i = 1; i <= testCaseArr - 2; i++) {
  //     for (let j = i + 1; j <= testCaseArr - 1; j++) {
  //       for (let k = j + 1; k <= testCaseArr; k++) {
  //         count++;
  //       }
  //     }
  //   }

  //   console.log(count);

  console.log(
    `${
      (BigInt(testCaseArr - 1) *
        BigInt(testCaseArr - 2) *
        BigInt(testCaseArr)) /
      BigInt(6)
    }`
  );
  console.log(3);
}
