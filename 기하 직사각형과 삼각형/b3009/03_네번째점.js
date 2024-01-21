const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b3009/input.txt";
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
  const xlist = [];
  const ylist = [];
  let xpos = 0;
  let ypos = 0;
  for (let i = 0; i < testCaseArr.length; i++) {
    xlist.push(testCaseArr[i][0]);
    ylist.push(testCaseArr[i][1]);
  }

  //   console.log(xlist);
  //   console.log(ylist);

  if (xlist[0] == xlist[1]) {
    xpos = xlist[2];
  } else if (xlist[0] == xlist[2]) {
    xpos = xlist[1];
  } else {
    xpos = xlist[0];
  }

  if (ylist[0] == ylist[1]) {
    ypos = ylist[2];
  } else if (ylist[0] == ylist[2]) {
    ypos = ylist[1];
  } else {
    ypos = ylist[0];
  }

  console.log(xpos, ypos);
}
