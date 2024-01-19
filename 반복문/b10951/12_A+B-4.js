const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b10951/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log("input : ", input);

const testCaseArr = [];
for (let i = 0; i < input.length; i++) {
  // 이 경우는 답안을 제출하면 input에서 값을 입력하지 않고 공백만을 입력해도 계산을 하는 문제로 인해 공백이면 input을 push하지 않게 하여
  // 문제없이 돌아가게 해야된다.
  if (input[i] == "") {
    break;
  }
  testCaseArr.push(input[i].split(" ").map((item) => +item));
}

solution(testCaseArr);

function solution(testCaseArr) {
  for (let i = 0; i < testCaseArr.length; i++) {
    let result = testCaseArr[i][0] + testCaseArr[i][1];
    console.log(result);
  }
}
