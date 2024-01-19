const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./반복문/b2439/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
//console.log("input : ", input);

const count = input[0].split(" ").map((item) => +item);

solution(count);

function solution(count) {
  for (let i = 1; i <= count; i++) {
    let list = "";
    for (let j = 1; j <= count - i; j++) {
      list += " ";
    }
    for (let k = count - i; k < count; k++) {
      list += "*";
    }
    console.log(list);
  }
}
