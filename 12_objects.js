//Object Creation two ways:-

//Using Object literals:
let person = {
  firstName: "Tanmay",
  lastName: "Mokal",
  isStudent: true,
  age: 22,
  nationality: "Indian",
  caste: "Hindu",
};
console.log(person);

//using Constructor function:
function Manus(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
let manus = new Manus("Tanmay", "Mokal");
console.log(manus);

//Accesing properties of objects:
console.log(person.caste);
console.log(person["isStudent"]); //always use in qoutes

//Modifying Properties:
person.firstName = "shivani";
console.log(person.firstName);
console.log(person);

//deleting properties:
delete person.firstName;
console.log(person);

//Methods:
let calculator = {
  add: function (x, b) {
    return x + b;
  },
};
console.log(calculator.add(2, 3));

//prototype and constructors:
function Persons(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Persons.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

let perso = new Persons("John", "Doe");
console.log(perso.getFullName()); // "John Doe"

//Objects:
let car = {
  make: "Toyota",
  model: "Camry",
  start: function () {
    console.log("The car is started.");
  },
};

car.start(); // "The car is started."
