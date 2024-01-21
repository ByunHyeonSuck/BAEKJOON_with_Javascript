const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b27323/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
const heigth = +input[0];
const width = +input[1];
console.log(heigth * width);
// console.log(testCase);

// solution(testCase);

// function solution(testCase) {}
