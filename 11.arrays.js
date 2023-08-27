console.log("arrays");

//Creating arrays;
let nums = [1, 2, 3, 4, 5];
let letters = ["a", "b", "c", "d"];
console.log(nums);

//Accesing arrays:
nums[2] = 10;
console.log(nums[2]);

//Array length;
console.log(nums.length);

//Adding Elements:
nums.push("apple");
nums.unshift("orange");
console.log(nums);

//Removing Elements;
nums.pop();
nums.shift();
console.log(nums);

//concat arrays;
let combined = nums.concat(letters);
console.log(combined);

//sliced arrays:
let sliced = combined.slice(3, 7);
console.log(sliced);

//Search Arrays:
console.log(combined.indexOf("a"));
combined.unshift("a");
console.log(combined.lastIndexOf("a"));
console.log(combined.includes("a"));

//Iterating Arrays:
console.log("-------");
combined.forEach((num) => console.log(num));
console.log("-------");
let doubled = nums.map((num) => num * 2);
console.log(doubled);
console.log("-------");
let evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers);
console.log("-------");

//Joining elements:
let numsString = nums.join(",");
console.log(numsString);

//Sorting:
nums.sort();
console.log(nums);

//Reversing Elements:
nums.reverse();
console.log(nums);
