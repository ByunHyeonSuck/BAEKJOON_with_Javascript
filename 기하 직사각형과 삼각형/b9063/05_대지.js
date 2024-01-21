const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b9063/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const count = +input[0];

const testCaseArr = [];
for (let i = 1; i <= count; i++) {
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
  const xlist = [];
  const ylist = [];
  let xmax = -10000;
  let xmin = 10000;
  let ymax = -10000;
  let ymin = 10000;
  for (let i = 0; i < count; i++) {
    xlist.push(testCaseArr[i][0]);
  }
  for (let i = 0; i < count; i++) {
    ylist.push(testCaseArr[i][1]);
  }

  //   console.log(xlist, ylist);

  for (let i = 0; i < count; i++) {
    if (xmax <= xlist[i]) {
      xmax = xlist[i];
    }
    if (xmin >= xlist[i]) {
      xmin = xlist[i];
    }
    if (ymax <= ylist[i]) {
      ymax = ylist[i];
    }
    if (ymin >= ylist[i]) {
      ymin = ylist[i];
    }
  }

  //   console.log(xmax, xmin, ymax, ymin);
  console.log((xmax - xmin) * (ymax - ymin));
}
