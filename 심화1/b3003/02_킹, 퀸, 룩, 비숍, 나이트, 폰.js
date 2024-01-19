const fs = require("fs");
const { title } = require("process");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./심화1/b3003/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const newinput = input[0].split(" ").map((item) => +item);
// console.log(newinput);
// console.log(newinput[3]);

solution(newinput);

function solution(newinput) {
  let chessCount = [1, 1, 2, 2, 2, 8];
  let result = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < newinput.length; i++) {
    result[i] = chessCount[i] - newinput[i];
  }

  let submitResult = "";
  for (let i = 0; i < newinput.length; i++) {
    submitResult += `${result[i]} `;
  }
  console.log(submitResult);
}
