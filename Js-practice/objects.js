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

