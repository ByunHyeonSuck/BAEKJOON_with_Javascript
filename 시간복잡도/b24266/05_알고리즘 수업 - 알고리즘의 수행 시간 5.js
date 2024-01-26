const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/시간복잡도/b24266/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = BigInt(input[0]);
// 입력값이 int형의 범위를 넘는 반례도 있다고 하여 BigInt로 풀어야되는데 BigInt로 하면 끝에 n이 붙어서 나온다.
// 이 n을 지우기 위해 문자열 String 타입으로 변환해서 출력해야 된다. 힝.. 그래서 **3을 못쓰고
// testCaseArr*testCaseArr*testCaseArr을 사용한다.

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  // let count = 0;
  // for (let i = 1; i <= testCaseArr; i++) {
  //   for (let j = 1; j <= testCaseArr; j++) {
  //     for (let k = 0; k < testCaseArr; k++) {
  //       count++;
  //     }
  //   }
  // }

  console.log(`${testCaseArr * testCaseArr * testCaseArr}`);
  console.log(3);
}
