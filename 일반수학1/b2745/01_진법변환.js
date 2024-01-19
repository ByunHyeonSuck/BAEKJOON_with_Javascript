const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/일반수학1/b2745/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = input[0]
  .trim()
  .split(" ")
  .map((item) => item);

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  const inputN = testCaseArr[0];
  const inputB = Number(testCaseArr[1]);
  let timevalue = 0;
  let exp = inputN.length - 1;
  for (let i = 0; i < inputN.length; i++) {
    if (inputN[i].charCodeAt() - 55 < 10) {
      timevalue += Number(inputN[i]) * Math.pow(inputB, exp);
    } else {
      timevalue += (inputN[i].charCodeAt() - 55) * Math.pow(inputB, exp);
    }
    exp--;
  }

  //   console.log(typeof (inputN[0].charCodeAt() - 55)); // 65
  //   console.log("A".charCodeAt() - 55); // 65
  //   console.log(inputN.length);
  //   console.log(inputB);
  //   console.log(typeof inputB);
  console.log(timevalue);
}
