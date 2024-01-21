const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b5073/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = [];
for (let i = 0; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => +item)
  );
}

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  let index = 0;
  while (testCaseArr[index][0] != 0) {
    let max = Math.max(...testCaseArr[index]);
    // ... 스프레드는 배열의 원소만을 반환하므로  Math.max()에 사용가능 max()는 매개변수로 배열을 못받으므로 원소값만을 받아야된다.
    let sum = 0;
    testCaseArr[index].forEach((element) => {
      sum += element;
    });
    // console.log(max);
    if (
      testCaseArr[index][0] == testCaseArr[index][1] &&
      testCaseArr[index][1] == testCaseArr[index][2]
    ) {
      console.log("Equilateral");
    } else if (max >= sum - max) {
      console.log("Invalid");
    } else if (
      (testCaseArr[index][0] == testCaseArr[index][1] &&
        testCaseArr[index][0] != testCaseArr[index][2]) ||
      (testCaseArr[index][1] == testCaseArr[index][2] &&
        testCaseArr[index][0] != testCaseArr[index][2]) ||
      (testCaseArr[index][0] == testCaseArr[index][2] &&
        testCaseArr[index][1] != testCaseArr[index][2])
    ) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }

    index++;
  }
}
