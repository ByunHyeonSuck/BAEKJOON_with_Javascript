const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b14215/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = input[0].split(" ").map((item) => +item);

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  let max = Math.max(...testCaseArr);
  let sum = 0;
  testCaseArr.forEach((item) => {
    sum += item;
  });
  // 밑에와 같이 직접 만들어도 되고...
  // const max2 = (testCaseArr) => {
  //   let max = 0;
  //   for (let i = 0; i < testCaseArr.length; i++) {
  //     if (max < testCaseArr[i]) {
  //       max = testCaseArr[i];
  //     }
  //   }

  //   return max;
  // };

  // console.log(max);
  // console.log(sum);
  if (max < sum - max) {
    console.log(sum);
  } else {
    let sumWithoutMax = sum - max;
    max = sum - max - 1;
    sum = sumWithoutMax + max;
    console.log(sum);
  }
}
