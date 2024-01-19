const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./일반수학1/b1193/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const count = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);

// console.log(count[0]);

solution(count);

function solution(count) {
  let k = 1;
  let arrlength = 1;
  while (arrlength < count) {
    k++;
    arrlength = (k * (k + 1)) / 2;
  }

  if (k % 2 == 0) {
    // 짝수 일때
    let mom = 1;
    let son = k;
    for (let i = 0; i < arrlength - count; i++) {
      mom++;
      son--;
    }
    console.log(`${son}/${mom}`);
  } else {
    // 홀수 일때
    let mom = k;
    let son = 1;
    for (let i = 0; i < arrlength - count; i++) {
      mom--;
      son++;
    }
    console.log(`${son}/${mom}`);
  }
}
