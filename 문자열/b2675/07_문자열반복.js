const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b2675/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const count = +input[0];
// console.log(count);

const testCaseArr = [];
for (let i = 0; i < count; i++) {
  testCaseArr.push(input[i + 1].split(" "));
}
// console.log(testCaseArr);
solution(testCaseArr, count);

function solution(testCaseArr, count) {
  let tempresult = [];
  for (let i = 0; i < count; i++) {
    tempresult.push(testCaseArr[i][1].trim());
  }

  //   console.log(tempresult);

  let result = [];
  let tempstring = "";
  for (let i = 0; i < count; i++) {
    let replay = Number(testCaseArr[i][0]);
    for (let k = 0; k < tempresult[i].length; k++) {
      for (let j = 0; j < replay; j++) {
        tempstring += `${tempresult[i][k]}`;
      }
    }
    result.push(tempstring);
    tempstring = "";
  }

  for (let i = 0; i < count; i++) {
    console.log(result[i]);
  }
}
