const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b10810/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// console.log(input);

const newinput1 = input[0].split(" ").map((item) => +item);
const basketCount = newinput1[0];
const count = newinput1[1];

//console.log(basketCount, count);

const testCaseArr = [];

for (let i = 1; i <= count; i++) {
  testCaseArr.push(input[i].split(" ").map((item) => +item));
}

//console.log(testCaseArr);
solution(testCaseArr, basketCount, count);

function solution(testCaseArr, basketCount, count) {
  let result = [];
  for (let i = 0; i < basketCount; i++) {
    result.push(0);
  }

  let left;
  let right;
  let ballNum;
  for (let i = 0; i < count; i++) {
    left = testCaseArr[i][0];
    right = testCaseArr[i][1];
    ballNum = testCaseArr[i][2];
    for (let j = left; j <= right; j++) {
      result[j - 1] = ballNum;
    }
  }

  let ans = "";
  for (let i = 0; i < basketCount; i++) {
    ans += `${result[i]} `;
  }
  //console.log(result);
  console.log(ans);
}
