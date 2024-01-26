const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/시간복잡도/b24313/input.txt";
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
  let fn = testCaseArr[0][0] * testCaseArr[2][0] + testCaseArr[0][1];
  let gn = testCaseArr[1][0] * testCaseArr[2][0];

  if (fn <= gn && testCaseArr[1][0] - testCaseArr[0][0] >= 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}
