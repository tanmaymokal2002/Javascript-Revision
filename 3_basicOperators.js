console.log("----------------------------");

//Arithmetic:
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //Modulus
console.log(x ** y); //Exponentian - 10^3
console.log("----------------------------");

//Assignment:
let a = 10;
x += 2;
x -= 2;
x %= 5;
console.log(x);
console.log("----------------------------");

//Comparison:
let a2 = 5;
let b = "5";
console.log(a2 == b); // true
console.log(a2 === b); // false
console.log("----------------------------");

//Logical:
let hasPermission = true;
let isAuthenticated = false;
console.log(hasPermission && isAuthenticated); // false
console.log(hasPermission || isAuthenticated); // true
console.log(!hasPermission); // false
console.log("----------------------------");

//Unary:
let num = "5";
console.log(+num); // 5 (converted to a number)
console.log(-num); // -5
console.log("----------------------------");
