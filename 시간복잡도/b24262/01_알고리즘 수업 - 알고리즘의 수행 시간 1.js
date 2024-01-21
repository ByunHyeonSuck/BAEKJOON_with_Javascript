const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/시간복잡도/b24262/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = input[0].split(" ").map((item) => +item);

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {}
