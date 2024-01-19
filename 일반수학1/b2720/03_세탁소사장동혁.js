const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./일반수학1/b2720/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const count = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);
const testCaseArr = [];
for (let i = 0; i < count; i++) {
  testCaseArr.push(
    input[i + 1]
      .trim()
      .split(" ")
      .map((item) => +item)
  );
}

// console.log(testCaseArr);
solution(testCaseArr, count);

function solution(testCaseArr, count) {
  const looptime = count[0];
  const remain = [25, 10, 5, 1];

  for (let i = 0; i < looptime; i++) {
    let money = testCaseArr[i][0];
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    if (money >= remain[0]) {
      quarter = parseInt(money / remain[0]);
      money = parseInt(money % remain[0]);
    }
    if (money >= remain[1]) {
      dime = parseInt(money / remain[1]);
      money = parseInt(money % remain[1]);
    }
    if (money >= remain[2]) {
      nickel = parseInt(money / remain[2]);
      money = parseInt(money % remain[2]);
    }
    if (money >= remain[3]) {
      penny = parseInt(money / remain[3]);
      money = parseInt(money % remain[3]);
    }

    console.log(quarter, dime, nickel, penny);
  }
}
