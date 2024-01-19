const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./심화1/b2941/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const newinput = input[0];
// console.log(newinput);

solution(newinput);

function solution(newinput) {
  // console.log(croaAlphabet[0][0]);
  let count = 0;
  let index = 0;
  while (index < newinput.length) {
    switch (newinput[index]) {
      case "c":
        if (newinput[index + 1] == "=") {
          index += 2;
          count++;
          break;
        } else if (newinput[index + 1] == "-") {
          index += 2;
          count++;
          break;
        } else {
          index++;
          count++;
          break;
        }
      case "d":
        if (newinput[index + 1] == "z" && newinput[index + 2] == "=") {
          index += 3;
          count++;
          break;
        } else if (newinput[index + 1] == "-") {
          index += 2;
          count++;
          break;
        } else {
          index++;
          count++;
          break;
        }
      case "l":
        if (newinput[index + 1] == "j") {
          index += 2;
          count++;
          break;
        } else {
          index++;
          count++;
          break;
        }
      case "n":
        if (newinput[index + 1] == "j") {
          index += 2;
          count++;
          break;
        } else {
          index++;
          count++;
          break;
        }
      case "s":
        if (newinput[index + 1] == "=") {
          index += 2;
          count++;
          break;
        } else {
          index++;
          count++;
          break;
        }
      case "z":
        if (newinput[index + 1] == "=") {
          index += 2;
          count++;
          break;
        } else {
          index++;
          count++;
          break;
        }
      default:
        index++;
        count++;
        break;
    }
  }

  console.log(count);
}
