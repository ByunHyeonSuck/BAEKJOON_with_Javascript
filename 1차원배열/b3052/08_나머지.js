const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b3052/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// 백준에 제출할때 위에서 trim()으로 문자열 앞뒤 공백을 제거해야 답이 맞는데 왜이러냐..
// console.log(input);

let testCaseArr = input.map((item) => +item);
const inputlength = input.length;

console.log(testCaseArr);
console.log(typeof testCaseArr[1]);

solution(testCaseArr, inputlength);

function solution(testCaseArr, inputlength) {
  const divnum = 42;
  let count = 0;
  let data;
  let result = [];
  for (let i = 0; i < inputlength; i++) {
    data = testCaseArr[i] % divnum;
    if (result.indexOf(data) === -1) {
      result.push(data);
    }
  }

  //   for (let i = 0; i < divnum; i++) {
  //     for (let j = 0; j < inputlength; j++) {
  //       if (result[j] == i) {
  //         count++;
  //         break;
  //       }
  //     }
  //   }

  console.log(result);
  console.log(result.length);
}
