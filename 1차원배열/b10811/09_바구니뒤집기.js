const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1차원배열/b10811/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// console.log(input);

const inputLen1 = input[0].split(" ").map((item) => +item);
const basketcount = inputLen1[0];
const count = inputLen1[1];

const testCaseArr = [];
for (let i = 1; i <= count; i++) {
  testCaseArr.push(input[i].split(" ").map((item) => +item));
}

// console.log(basketcount);
// console.log(count);
// console.log(testCaseArr);

solution(testCaseArr, basketcount, count);

function solution(testCaseArr, basketcount, count) {
  let basket = [];
  for (let i = 0; i < basketcount; i++) {
    basket.push(i + 1);
  }

  for (let i = 0; i < count; i++) {
    let left = testCaseArr[i][0] - 1;
    let right = testCaseArr[i][1] - 1;
    while (left <= right) {
      let temp = basket[left];
      basket[left] = basket[right];
      basket[right] = temp;
      left++;
      right--;
    }
  }
  let result = "";
  for (let i = 0; i < basketcount; i++) {
    result += `${basket.shift()} `;
  }
  console.log(result);
}
