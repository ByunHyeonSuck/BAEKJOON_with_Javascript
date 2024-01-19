const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b1152/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);
// 이문제에서 split으로 나눠서 length를 통해 길이를 구해 간단히 해결할 수 있어보니아
// " " 만이 입력된 input일 경우 이 공백을 받아들여 길이가 1이라고 반환하므로 이를 제외하기 위해서 따로
// 조건을 만들어 되야 한다.
input = input[0].trim().split(" ");
// console.log(input);

solution(input);

function solution(input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] != "") {
      count++;
    }
  }
  console.log(count);
}
