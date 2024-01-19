const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./입출력과 사칙연산/b1000/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

/** 
 split을 했기때문에 input은 배열이고 내부 요소는 문자열이다.

 console.log(input[0]);
 console.log(typeof input[0]);
*/
input = input[0];
const newinput = input.split(" ").map((item) => +item);

// console.log(newinput); number 형으로 구성된 배열 형성

solution(newinput[0], newinput[1]);

function solution(A, B) {
  console.log(A + B);
}
