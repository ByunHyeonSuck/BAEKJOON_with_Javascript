const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./심화1/b25026/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const testCaseArr = [];

for (let i = 0; i < input.length; i++) {
  testCaseArr.push(
    input[i]
      .trim()
      .split(" ")
      .map((item) => item)
  );
}
// console.log(testCaseArr);

solution(testCaseArr);

function solution(testCaseArr) {
  let courseScore = 0; //학점
  let divScore = 0;
  let count = 0; //P과목 제외하기 위한 카운트
  for (let i = 0; i < testCaseArr.length; i++) {
    let score = 0; //학점 *과목평점
    let tempdivscore = 0; // 학점의 총합
    switch (testCaseArr[i][2]) {
      case "A+":
        score = parseFloat(testCaseArr[i][1]) * 4.5;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "A0":
        score = parseFloat(testCaseArr[i][1]) * 4.0;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "B+":
        score = parseFloat(testCaseArr[i][1]) * 3.5;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "B0":
        score = parseFloat(testCaseArr[i][1]) * 3.0;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "C+":
        score = parseFloat(testCaseArr[i][1]) * 2.5;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "C0":
        score = parseFloat(testCaseArr[i][1]) * 2.0;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "D+":
        score = parseFloat(testCaseArr[i][1]) * 1.5;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "D0":
        score = parseFloat(testCaseArr[i][1]) * 1.0;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "F":
        score = parseFloat(testCaseArr[i][1]) * 0.0;
        tempdivscore = parseFloat(testCaseArr[i][1]);
        // console.log(score);
        break;
      case "P":
        score = 0;
        tempdivscore = 0;
        // console.log(score);
        break;
      default:
        break;
    }
    courseScore += score;
    divScore += tempdivscore;
  }
  //   console.log(courseScore);
  //   console.log(divScore);
  console.log(courseScore / divScore);
}
