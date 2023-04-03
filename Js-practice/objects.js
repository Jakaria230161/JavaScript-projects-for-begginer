/* 
Object are the king of javascript. if you understand objects then you understand JavaScript.
In JavaScript almost everything is object
----------------------------------------------
1,String can be object with new keyword
2,Number can be object with new keyword
3,Boolean can be object with new keyword
4,Array always object in javascript
5,object always object in javascript
6,function always object in javascript
7,RegExp are always object in javascript
8,Dates are always object in javascript
9,Math are always object in javascript
10, Set o kintu object
11, map o kintu object
-------------------------------------------------
Primitive data types a value which has not any properties or value
Primitive values are immutable, that can not be changed.
1,String
2,Number
3,Boolean
4,Null
5, Undefined
these are primitive data types in javascript
*/

const objExplore = {
  name: "Jakaria",
  roll: 1719029,
  age: 24,
  institute: "Islalmic University"
}
// set new value
objExplore.age = 25;
// adding to the new value 
objExplore.District = "Barguna";
objExplore.Division = "Barishal";
// delete from the object
delete objExplore.Division;
console.log(objExplore);

// nested object
const myObj = {
  firstName: "Jakaria",
  lastName: "Mahmud",
  age: 25,
  language: {
    firstLan: "Bangla",
    secondLan: "English",
    thirdLan: "Arabic"
  },
  cars: [
    {name: "BMW", model:["x3", "x5", "x6"]},
    {name: "Fiat", model:["500", "600", "panda"]},
    {name: "Volvo", model:["Focus", "Mustang", "Fiesta"]}
  ]
}
for(let x in myObj.cars) {
  console.log(x);
}
console.log(myObj);
console.log(myObj.cars[0]);

// display the objects
const displayObj = {
  firstName: "Jakaria",
  lastName: "Mahmud",
  age: 25
}
let displayText = '';
for(let x in displayObj) {
  displayText += displayObj[x];
}
document.getElementById("demo-6").innerHTML = displayText;
console.log(Object.values(displayObj));

// object accessors > getter methods
const objectAccess = {
  firstName: "Jakaria",
  lastName: "mahmud",
  language: "English",
  message: "",
  // getter methods
  get lang() {
    return this.language;
  },
  get fullName () { // this is the benefits of getter methods.
    return this.firstName + " " + this.lastName;
  }
}
console.log(objectAccess.lang);
console.log(objectAccess.fullName);

// setter methods
const setterObj = {
  firstName: "Jakaria",
  lastName: "mahmud",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

setterObj.lang = "English"; // sets the language property to "English"
console.log(setterObj.language); // prints "English"

// constructor functions > name always capital letter deowa better
function Persona(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
}
const jakaria = new Persona ("Jakaria", "Mahmud", 25, "Black");
// add property
jakaria.nationality = "Bangladesh";

console.log(jakaria);
console.log(jakaria.fullName());

// another example of function/object constructor
function Friends (name, age, type) {
  this.name = name;
  this.age = age;
  this.type = type;
  this.status = function () {
    return this.name + " " + this.age;
  }
}
// add properties on Friends constructor by prototype. bcz without prototype you can not add any property in Friends Constructor. but you can add any property in Like samir
Friends.prototype.country = "Bangladesh";
const samir = new Friends("Samir", 27, "Very good");
console.log(samir);
console.log(samir.country); // output : Bangladesh
console.log(samir.status());

/* 
Iterable > ja step by step jete pare. looping korte pare
----------
1,Object = is not a iterable
2, Array = is a iterable because array has symbol.iterator prototype
3,object = use for in loop
4, array = use for loop, for of, while loop, do while loop.bcz array er khetre order ta important

Object ke iterable > ek kothay iterable bolte jar moddho diye loop kora jay
-------------------
Object ke iterable korte hole Symbol.iterator function make korte nite hobe. custom vabe create kore object ke array er moto korei iterable kora jay.
*/

// create a Set > set is a store unique values
const lettersSet = new Set (['a', 'b', 'c', 'd', 'e', 'a', 'b']);
console.log(lettersSet.values()); // setIterator
console.log(lettersSet); // eikhane a, b 2 bar ache tai eta 2 bar asbe na. tai hocche set hocche unique value store kore.
const objMethod = {
  name: "Jakaria",
  age: 25
}
console.log(Object.entries(objMethod)); // this Object.entries methods give us key value pairs

// Map vs Object > object a index number thake na, order important na but map er khetre order important, jeikhane order thik rakhe. etai major difference between map and object
const mapVar = new Map();
// set the map value
mapVar.set("apples", "500tk");
mapVar.set("banana", "400tk");
mapVar.set("mango", "300tk");
// change  the map value
mapVar.set("apples", "600tk");
// delete
mapVar.delete("apples");
// has
console.log(mapVar.has("apples")); // output : false bcz eta nai
console.log(mapVar);