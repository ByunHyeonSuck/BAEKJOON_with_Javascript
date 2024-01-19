const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./심화1/b10988/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const newinput = input[0];
// console.log(newinput);

solution(newinput);

function solution(newinput) {
  let result;
  for (let i = 0; i < newinput.length / 2; i++) {
    if (newinput[i] == newinput[newinput.length - i - 1]) {
      result = 1;
    } else {
      result = 0;
      break;
    }
  }

  console.log(result);
}
