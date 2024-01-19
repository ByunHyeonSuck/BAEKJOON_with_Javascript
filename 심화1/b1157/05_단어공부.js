const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./심화1/b1157/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const newinput = input[0];
// console.log(newinput);

solution(newinput);

function solution(newinput) {
  const arr = Array.from({ length: 26 }, (v, i) => 0); // i(index) 1씩 증가
  // console.log(arr);
  const upperInput = newinput.toUpperCase();
  // console.log(upperInput);
  for (let i = 0; i < upperInput.length; i++) {
    arr[upperInput[i].charCodeAt() - 65] += 1;
  }
  // console.log(arr);
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // console.log(max);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      count++;
    }
  }
  let index;
  if (count >= 2) {
    console.log("?");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == max) {
        index = i;
      }
    }
    console.log(String.fromCharCode(65 + index));
  }
}
