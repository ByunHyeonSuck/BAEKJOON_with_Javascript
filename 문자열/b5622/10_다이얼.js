const fs = require("fs");
const { title } = require("process");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b5622/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

input = input[0];
// console.log(input);
// console.log(typeof input);
solution(input);

function solution(input) {
  let timesum = 0;
  //   console.log(input.length);

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "A":
      case "B":
      case "C":
        timesum += 2 + 1;
        break;
      case "D":
      case "E":
      case "F":
        timesum += 3 + 1;
        break;
      case "G":
      case "H":
      case "I":
        timesum += 4 + 1;
        break;
      case "J":
      case "K":
      case "L":
        timesum += 5 + 1;
        break;
      case "M":
      case "N":
      case "O":
        timesum += 6 + 1;
        break;
      case "P":
      case "Q":
      case "R":
      case "S":
        timesum += 7 + 1;
        break;
      case "T":
      case "U":
      case "V":
        timesum += 8 + 1;
        break;
      case "W":
      case "X":
      case "Y":
      case "Z":
        timesum += 9 + 1;
        break;
    }
  }

  console.log(timesum);
}
