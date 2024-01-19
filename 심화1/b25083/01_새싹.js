const fs = require("fs");
const { title } = require("process");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./문자열/b11718/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

solution();

function solution() {
  console.log(`         ,r'"7`);
  console.log(`r\`-_   ,'  ,/`);
  console.log(` \\. ". L_r'`);
  console.log(`   \`~\\/`);
  console.log(`      |`);
  console.log(`      |`);
}
