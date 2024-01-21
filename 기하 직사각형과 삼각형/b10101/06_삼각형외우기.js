const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./BAEKJOON_with_Javascript/기하 직사각형과 삼각형/b10101/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const angle1 = +input[0];
const angle2 = +input[1];
const angle3 = +input[2];
// console.log(angle1);

solution(angle1, angle2, angle3);

function solution(angle1, angle2, angle3) {
  if (angle1 == 60 && angle2 == 60 && angle3 == 60) {
    console.log("Equilateral");
  } else if (angle1 + angle2 + angle3 == 180) {
    if (
      (angle1 == angle2 && angle1 != angle3) ||
      (angle1 == angle3 && angle1 != angle2) ||
      (angle2 == angle3 && angle2 != angle1)
    ) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Error");
  }
}
