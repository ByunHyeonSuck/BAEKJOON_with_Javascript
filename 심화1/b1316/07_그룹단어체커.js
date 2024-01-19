const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./심화1/b1316/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const inputCount = +input[0];
// console.log(inputCount);
const testCaseArr = [];
for (let i = 0; i < inputCount; i++) {
  testCaseArr[i] = input[i + 1].trim();
}

// console.log(testCaseArr);
// console.log(testCaseArr[0].length);
// console.log(testCaseArr[0][0]);

solution(testCaseArr, inputCount);

function solution(testCaseArr, inputCount) {
  let count = 0;
  for (let i = 0; i < inputCount; i++) {
    const str = testCaseArr[i];
    let letter = [];

    let isGroupWord = true;

    for (let j = 0; j < str.length; j++) {
      if (letter.indexOf(str[j]) === -1) {
        letter.push(str[j]);
      } else {
        if (letter.indexOf(str[j]) !== letter.length - 1) {
          isGroupWord = false;
          break;
        }
      }
    }
    if (isGroupWord) {
      count += 1;
    }
  }

  console.log(count);
}
