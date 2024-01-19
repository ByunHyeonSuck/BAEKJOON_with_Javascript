const { timeStamp } = require("console");
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b8393/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log("input : ", input);

input1 = input[0];

const newinput1 = input1.split(" ").map((item) => +item);

solution(newinput1[0]);

function solution(input) {
  const result = (input * (input + 1)) / 2;
  console.log(result);
}
