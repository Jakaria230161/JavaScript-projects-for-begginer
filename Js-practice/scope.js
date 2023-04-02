/* 
Scope > determine the accessibility of variables > kothay kototuk ami use korte parbo r ki
-----
Scope are three kinds
1, Block >  {let, const} tobe { er moddhe var diye variable declare hoy taile eta r block scope thakbe na} let , const diye {er moddhe declared korle ei curly brace er baire eta access kora jabe na.} > if condition er curly brace er baire eta access kora jabe na.
2, Function {} er moddhe var, let, const ja diyei variable declare kori na keno sob e functional scope hobe.
3, Global > var variable global and function scope, jokhon function er moddhe declare hoy tokhn eta function scope hoye jay.
Note: jodi openly var,let, const ja diyei variable declare kori na keno sob e global scope hobe jodi na seta kono function or curly brace er moddhe na hoy.
function o kintu variable hoy
*/ 

// local scope > local variable have function scope
// const myFunction = () => {
//   let localScope = "I am local scope"; // function er moddhe variable declare korle eta local scope
// }

/* 
Hoisting > just declaration hoy not initialization mane js a hoisting mane declaration hoy but initialization hoy na. 
---------
JavaScript's Default behavior of  moving declarations to the top
1, Var = upre declare kore ney jodi shudhu value assign kra thake. x = 4; console.log(x); var x; taile ekhon declare ta upre niye jay then x = undefined set kore ney automatically
2, Let = er khetre emon ta hoy na,age initialization kra dorkaar noile reference error dibe, kenona eta x er value undefined set kore na, etao kintu upre niye jay mane hoisted just var er moto x = undefined set kre na tai reference error dey r ki. x = 5; console.log(x)l let x; ekhon error dibe. > eta temporal dead zone a thake 
3, const = er khetre eta syntax error dibe bcz const a alada kre declare e kra jay na. 
-----------------
const carName; 
carName = "Volvo"; 
------------------
emon kora e jay na, agei value assign kore declaration with value korte hoy. jemon 
-----------------------
const carName = "Volvo"; 
-------------------------
emon kore korte hobe.

*/

/* 
The JavaScript this keyword is refers to the {objects }it's belongs to.
-------------
1, Methods > jeta objects er moddhe kono function property akare thake seta e methods > r eikhane this refer kore owner of the object
2, alone this thakle global object ke bujhabe
3,function er moddhe this keyword thakle global object ke e bujhabe
4, events > er moddhe this keyword thakle ta elements ke bujhabe jeta received korbe
5,In a function, in a strict mode, this keyword thakle seta undefined hobe.
*/

const personObj = {
  name: "Jakaria",
  roll : 1719029,
  institute : "Islamic University",
  myAction: function () { // this is a method
    return this.name; // this is the owner of the object.
  },
  getRoll : function () {
    return this.roll;
  }
};
console.log(personObj.myAction());
console.log(personObj.getRoll());

// explicitly exploring this keyword
const person1 = {
  fullName : function () {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName : "Jakaria",
  lastName : "Mahmud"
}

console.log(person1.fullName()); // output :  undefined undefined bcz person1 a define e hoy nai firstName and lastName
console.log(person1.fullName.call(person2)); // output : Jakaria Mahmud

// arrow functions
const arrowFunction = () => console.log("Hi I am arrow function!"); // shorthand = 1 line a likhte parben jokhon statement 1 ta thakbe
arrowFunction();

// Normal function
function arrowFunc () {
  console.log("Hi I am normal function !!");
}
arrowFunc();
// Note: arrow functions er khetre this keyword different

/* 
Class = is the template for JavaScript object
-----
class syntax = create with class keyword and add a method to the class named constructor 
class syntax
=============
class ClassName {
  constructor() {

  }
}
*/

// class syntax example
class Car { // normally class er variable capital letter diye likhte hoy
  constructor(name, year, message) { // class a constructor thakbe then initial properties dite parbe. eta must thakte hobei.
    this.name = name;
    this.year = year;
    this.message = message;
  }
} // eta kintu object na, eta holo template for the javascript object
const car1 = new Car("BMW", 2023, "yeahoo");
const car2 = new Car ("Mercedes", 2024, "OMG!! this is super car");
console.log(car1);
console.log(car2);

// another class example with a method
class Person { // class is template object for the javascript
  constructor(name, age, message) {
    this.name = name;
    this.age = age;
    this.message = message;
  }
  eat(msg) { // this is method in class constructor, you can pass parameter
    console.log(`${this.name} is eating and ${msg}`) // with dynmically called
  }
}
const personOne = new Person("Jakaria", 25, "You are young!!");
personOne.eat("after eating, go to bed for sleeping");
const personTwo = new Person ("Ayesha", 24, "Hi mera wife!!");
console.log(personOne);
console.log(personTwo);

// JSON = javascript object notation, is only text format. supported in any programming language.
// object to json format
const toJson = {
  firstName: "Jakaria",
  lastName : "Mahmud"
};
const convertToJson = JSON.stringify(toJson); // converted to json format
const convertedToObj = JSON.parse(convertToJson); // converted to object format from json format
console.log(convertedToObj);
console.log(convertToJson);

// Best practice > always variable declarations on the top
// Declare on the top
let firstNum, secondNum, thirdNum, fourthNum, allNum;
// then set the value below
firstNum = 1;
secondNum = 2;
thirdNum = 3;
fourthNum = 4;
allNum = firstNum + secondNum + thirdNum + fourthNum;
console.log(allNum);

// declare on the top all variables name
let buyFish, buyTomato, buyPotato, buyChilly, totalBuy;
// after declare all variables on the top then set the value below
buyFish = 1000;
buyTomato = 50;
buyPotato = 100;
buyChilly = 200;
totalBuy = buyFish + buyTomato + buyPotato + buyChilly;
console.log(totalBuy);

