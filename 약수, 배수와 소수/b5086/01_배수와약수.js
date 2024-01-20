const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/약수, 배수와 소수/b5086/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = [];
for (let i = 0; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => +item)
  );
}
// console.log(testCaseArr[0][0]);

solution(testCaseArr);

function solution(testCaseArr) {
  let i = 0;
  while (testCaseArr[i][0] != 0 && testCaseArr[i][1] != 0) {
    if (testCaseArr[i][0] >= testCaseArr[i][1]) {
      if (testCaseArr[i][0] % testCaseArr[i][1] == 0) {
        console.log("multiple");
      } else {
        console.log("neither");
      }
      i++;
    } else if (testCaseArr[i][0] <= testCaseArr[i][1]) {
      if (testCaseArr[i][1] % testCaseArr[i][0] == 0) {
        console.log("factor");
      } else {
        console.log("neither");
      }
      i++;
    }
  }
}
