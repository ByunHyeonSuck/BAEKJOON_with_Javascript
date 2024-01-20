const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/약수, 배수와 소수/b9506/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = [];
for (let i = 0; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => +item)
  );
}

// console.log(testCaseArr);

solution(testCaseArr);

function solution(testCaseArr) {
  let i = 0;
  while (testCaseArr[i][0] != -1) {
    let divisorArr = [];
    let sum = 0;
    let result = "";
    for (let j = 1; j < testCaseArr[i][0]; j++) {
      if (testCaseArr[i][0] % j == 0) {
        divisorArr.push(j);
        sum += j;
      }
    }

    if (sum == testCaseArr[i][0]) {
      result += `${testCaseArr[i][0]} = ${divisorArr[0]}`;
      for (let j = 1; j < divisorArr.length; j++) {
        result += ` + ${divisorArr[j]}`;
      }
      console.log(result);
    } else {
      console.log(`${testCaseArr[i][0]} is NOT perfect.`);
    }
    i++;
  }
}
