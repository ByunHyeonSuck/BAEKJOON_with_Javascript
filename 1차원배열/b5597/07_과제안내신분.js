const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b5597/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log(input);

const testCaseArr = [];

for (let i = 0; i < 28; i++) {
  testCaseArr.push(input[i].split(" ").map((item) => +item));
}

// console.log(testCaseArr);
// console.log(testCaseArr[0][0]);
// console.log(testCaseArr[1]);
solution(testCaseArr);

function solution(testCaseArr) {
  const result = Array.from({ length: 30 }, (_, i) => 0); // 길이30이고 원소의 값이 모두 0인 배열 생성
  let ans = [];
  //console.log(result);

  for (let i = 0; i <= 27; i++) {
    result[testCaseArr[i][0] - 1] = testCaseArr[i][0];
  }
  //console.log(result);

  for (let i = 0; i < 30; i++) {
    if (result[i] == 0) {
      ans.push(i + 1);
    }
  }

  console.log(ans[0]);
  console.log(ans[1]);
}
