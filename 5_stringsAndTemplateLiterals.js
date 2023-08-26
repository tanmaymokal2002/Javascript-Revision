let x = "hello tanmay what are doing"; //creating strings
let y = "line 1 \\ line 2"; // escape character allows us to use symbols
console.log(y.length); //string length
console.log(x + y); // string concatenation
let nickName = "tany",
  myName = "Tanmay";
console.log(`I am ${myName} and nick name is ${nickName}`); //Template literals

//Strings Methods:
let a = "Tanmay Mokal";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.substring(3, 6));
console.log(a.split());
console.log(a.charAt(2));
console.log(a.charCodeAt(2));
console.log(a.indexOf("n"));
console.log(a.replace("Tanmay", "Tejas"));
