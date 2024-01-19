const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b2562/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log(input);

let testCaseArr = [];
for (let i = 0; i < 9; i++) {
  testCaseArr.push(Number(input[i]));
}

//console.log(testCaseArr[0]);
//console.log(typeof testCaseArr[1]);

solution(testCaseArr);

function solution(testCaseArr) {
  let order = 0;
  let max = 0;
  for (let i = 0; i < 9; i++) {
    if (max < testCaseArr[i]) {
      max = testCaseArr[i];
      order = i + 1;
    }
  }

  console.log(max);
  console.log(order);
}
