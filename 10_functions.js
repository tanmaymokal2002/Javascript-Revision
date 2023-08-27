//Simple Function:
function greet(x) {
  console.log(`Hello ${x}!`);
}
greet("Tanmay");

//Parameterized Function:
function add(x, y) {
  return `${x} + ${y} = ${x + y}`;
}
let ans = add(2, 4);
console.log(ans);

//Anonymus Function / function expression
let sqr = function (x) {
  return x * x;
};
console.log(sqr(290));

//Arrows Function:
let sq = (x) => x * x;
console.log(sq(290));

//Function as callback
function makeNumbersSq(nums, action) {
  let result = [];
  for (let num of numbers) {
    result.push(action(num));
  }
  return result;
}
let numbers = [1, 2, 3, 4, 5];
let ans2 = makeNumbersSq(numbers, (num) => num * num);
console.log(ans2);

//Function with Default Parameter:
function greet(x = "Guest") {
  console.log(`Hello ${x}!`);
}
greet();

//Recursive Function:
function fac(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}
console.log(fac(5));
