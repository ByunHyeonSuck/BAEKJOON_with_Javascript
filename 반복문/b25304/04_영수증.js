const { timeStamp } = require("console");
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b25304/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//onsole.log("input : ", input);

input1 = input[0];
input2 = input[1];
const sum = input1.split(" ").map((item) => +item);
const count = input2.split(" ").map((item) => +item);
// console.log(sum);
// console.log(count);

const testCaseArray = [];
for (let i = 0; i < count; i++) {
  testCaseArray.push(input[i + 2].split(" ").map((item) => +item));
}

//console.log(testCaseArray);
solution(sum, count, testCaseArray);

function solution(sum, count, testCaseArray) {
  let solsum = 0;
  for (let i = 0; i < count; i++) {
    solsum += testCaseArray[i][0] * testCaseArray[i][1];
  }

  if (solsum == sum) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
