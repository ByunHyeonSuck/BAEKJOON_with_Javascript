const { timeStamp } = require("console");
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b10950/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log("input : ", input);

input1 = input[0];

const newinput1 = input1.split(" ").map((item) => +item);
const arr = [];
for (let i = 0; i < newinput1; i++) {
  arr.push(input[i + 1].split(" ").map((item) => +item));
}

// console.log(arr[1][1]);
// console.log(typeof arr[1][1]);

solution(newinput1, arr);

function solution(times, arr) {
  for (let i = 0; i < times; i++) {
    console.log(arr[i][0] + arr[i][1]);
  }
}
