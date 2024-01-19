const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b10952/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log("input : ", input);

const testCaseArr = [];
for (let i = 0; i < input.length; i++) {
  testCaseArr.push(input[i].split(" ").map((item) => +item));
}

solution(testCaseArr);

function solution(testCaseArr) {
  let idx = 0;
  while (testCaseArr[idx][0] != 0 && testCaseArr[idx][1] != 0) {
    console.log(testCaseArr[idx][0] + testCaseArr[idx][1]);
    idx++;
  }

  // for문으로 풀면 NZEC 런타임 에러가 난다.. 힝..
  //   for (let i = 0; i < testCaseArr.length; i++) {
  //     if (testCaseArr[i][0] == 0 && testCaseArr[i][1] == 0) {
  //       break;
  //     }
  //     let result = testCaseArr[i][0] + testCaseArr[i][1];
  //     console.log(result);
  // }
}
