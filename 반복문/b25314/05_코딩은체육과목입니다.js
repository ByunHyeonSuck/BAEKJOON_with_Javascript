const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b25314/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//onsole.log("input : ", input);

const count = input[0].split(" ").map((item) => +item);

solution(count);

function solution(count) {
  count = count / 4;
  let anw = "";
  for (let i = 0; i < count; i++) {
    anw += "long ";
  }
  console.log(anw + "int");
}
