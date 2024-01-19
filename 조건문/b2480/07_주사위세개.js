const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./조건문/b2480/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input1 = input[0];

const newinput1 = input1.split(" ").map((item) => +item);

solution(newinput1[0], newinput1[1], newinput1[2]);

function solution(dice1, dice2, dice3) {
  let result;
  if (dice1 == dice2 && dice2 == dice3) {
    result = 10000 + 1000 * dice1;
  } else if (dice1 != dice2 && dice2 != dice3 && dice1 != dice3) {
    if (dice1 >= dice2 && dice1 >= dice3) {
      result = dice1 * 100;
    } else if (dice2 >= dice1 && dice2 >= dice3) {
      result = dice2 * 100;
    } else {
      result = dice3 * 100;
    }
  } else {
    if (dice1 == dice2) {
      result = 1000 + dice1 * 100;
    } else if (dice1 == dice3) {
      result = 1000 + dice1 * 100;
    } else {
      result = 1000 + dice2 * 100;
    }
  }
  console.log(result);
}
