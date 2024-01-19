const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b10809/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = input[0];

solution(testCaseArr);

function solution(testCaseArr) {
  let alphabet = Array.from({ length: 26 }, (_, i) => (i = -1));
  //   console.log(alphabet);
  for (let i = 0; i < testCaseArr.length; i++) {
    let num = testCaseArr[i].charCodeAt();
    if (alphabet[num - 97] == -1) {
      alphabet[num - 97] = i;
    }
  }
  let result = "";
  for (let i = 0; i < 26; i++) {
    result += `${alphabet[i]} `;
  }
  console.log(result);
}
