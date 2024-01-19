const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b2908/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

input = input[0].split(" ").map((item) => item);

solution(input);

function solution(input) {
  const input1Len = input[0].length;
  const input2Len = input[1].length;

  let resultArr2 = " ";
  let resultArr1 = " ";

  for (let i = input1Len - 1; i >= 0; i--) {
    resultArr1 += input[0][i];
  }

  //   console.log(resultArr1);

  for (let i = input2Len - 1; i >= 0; i--) {
    resultArr2 += input[1][i];
  }

  //   console.log(resultArr2);
  if (resultArr1 > resultArr2) {
    console.log(Number(resultArr1));
  } else {
    console.log(Number(resultArr2));
  }
}
