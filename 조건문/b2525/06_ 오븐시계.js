const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./조건문/b2525/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input1 = input[0];
input2 = input[1];

const newinput1 = input1.split(" ").map((item) => +item);
const newinput2 = input2.split(" ").map((item) => +item);

solution(newinput1[0], newinput1[1], newinput2[0]);

function solution(hour, minute, After) {
  let plusMinute = After % 60;
  let plusHour = After / 60;

  hour += plusHour;
  minute += plusMinute;
  if (minute >= 60) {
    minute -= 60;
    hour += 1;
  }
  if (hour >= 24) {
    hour %= 24;
  }

  console.log(`${parseInt(hour)} ${minute}`);
}
