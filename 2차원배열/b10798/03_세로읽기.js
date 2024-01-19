const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2차원배열/b10798/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = [];
for (let i = 0; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => item)
  );
}
// console.log(testCaseArr);
// console.log(testCaseArr[1][0][1]);
// console.log(testCaseArr.length);
// const arr = `${testCaseArr[1]}`;
// console.log(arr[1]);

solution(testCaseArr);

function solution(testCaseArr) {
  let maxlength = 0;
  let result = "";
  for (let i = 0; i < testCaseArr.length; i++) {
    if (maxlength < testCaseArr[i][0].length) {
      maxlength = testCaseArr[i][0].length;
    }
  }
  //   console.log(maxlength);
  for (let i = 0; i < maxlength; i++) {
    for (let j = 0; j < testCaseArr.length; j++) {
      if (testCaseArr[j][0][i] == undefined) {
        result += "";
      } else {
        result += `${testCaseArr[j][0][i]}`;
      }
    }
  }

  console.log(result);
}
