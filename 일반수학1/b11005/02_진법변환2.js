const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./일반수학1/b11005/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);

// console.log(testCaseArr);
solution(testCaseArr);

function solution(testCaseArr) {
  let list = [];
  let base = testCaseArr[1];
  let newinput = testCaseArr[0];
  //   console.log(base, newinput);
  let remainer;
  while (newinput >= base) {
    remainer = parseInt(newinput % base);
    newinput = parseInt(newinput / base);
    list.push(remainer);
  }
  list.push(newinput);
  //   console.log(list);
  list.reverse();
  let result = "";
  for (let i = 0; i < list.length; i++) {
    if (
      String.fromCharCode(list[i] + 55) >= "A" &&
      String.fromCharCode(list[i] + 55) <= "Z"
    ) {
      result += String.fromCharCode(list[i] + 55);
    } else {
      result += list[i];
    }
  }

  console.log(result);
}
