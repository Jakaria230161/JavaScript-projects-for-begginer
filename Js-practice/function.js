/* 
FUNCTION
--------
1,Object function create korle arrow function use korben na because eikhane this keyword use korte parben na. arrow function this keyword ke chine na. tobe arrow function ei this keyword ke global e think kore, jodi global kono variable thake se tare mean korbe.
2, Arrow function kintu hoisted hoy na , eta hoilo arekta difference normal function er sathe.
3, In arrow function best practice is always use return keyword
4, function er argument tai holo function er actual value
5,1ta function er parameter ekoi thake but arguments kintu change hoy.
6, parameter er kono data type nai but arguments various types hote pare, apni argument hisebe dilen ("Jakaria", 25) eikhane ekta string r ekta number
7,eker odhik parameter hoile default value diye deowa valo bcz user jodi kokhono ekta argument kom dey tokhn oi ekta e undefined asbe r jodi number er sathe string multiply krte jay tokhon toh abar NaN asbe

*/
// function declaration
function functionName () {
  console.log("Hi I am a Normal function!")
}
functionName();

// self-invoking function > IIFE
(function() {
  console.log("Hi my dear user !! I called myself without your calling, that's why I am a self-invoking function!")
}) ();

// function use as value 
function valueFunction (a, b) {
  // this is a value which will be returned by the function
  return a * b;
  // return arguments.length; // return arguments
}
let multiply = valueFunction(4, 5);
console.log(multiply);

// arrow function > this keyword you cannot use in a arrow function
const func = (a, b) => a * b;
// using default value in arrow function
const defaultValueInFunc = (a = 0, b = 5) => {
  return a * b;
}
console.log(defaultValueInFunc(3));// use default value
console.log(defaultValueInFunc(3, 6));

// passed a value as object
function valueFunc (x) {
  x.one = 5;
  return x.one * x.two;
}
const p  = {
  one: 3,
  two: 4
}
console.log(valueFunc(p));

// Constructor function which is originally a object 
function ConstructorFunction (arg1, arg2) {
  this.firstName = arg1, // this keyword arrow function a kintu kaj korbe na
  this.lastName = arg2 // eikhane kintu this keyword er kono value nai but jokhon niche newObject create korechi tokhon tar value ache
}
const newObject = new ConstructorFunction("Jakaria", "Mahmud");
console.log(newObject.firstName);
/* 
There are invocation function
1,ConstructorFunction();
2,new ConstructorFunction();
3, newObject.firstName();
*/

// Call function with arguments and parameters example
const personInfo = {
  fullName: function (city, country) { // with parameters
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const personInfo1 = {
  firstName: "Jakaria",
  lastName: "Mahmud"
}

const personInfo2 = {
  firstName: "Hridoy",
  lastName: "Islam"
}

console.log(personInfo.fullName.call(personInfo1, "Dhaka", "Bangladesh")); // here i use call()
console.log(personInfo.fullName.call(personInfo2, "Oslo", "Norway")); // here i use call() method with arguments

// without call method 
const objInfo = {
  fullName : function () {
    return this.firstName + " " + this.lastName;
  }
}
const objInfo1 = {
  firstName: "Imran",
  lastName: "Hossain"
};
const objInfo2 = {
  firstName: "Lulu",
  lastName: "Khan"
};
console.log(objInfo.fullName.call(objInfo1));

// call() vs apply() > apply() a argument gula array akare send kora jay. ei 1 tai major difference
const objectInfo = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const objectInfo1 = {
  firstName: "Tamim",
  lastName: "Iqbal"
};
const objectInfo2 = {
  firstName: "Sakib",
  lastName: "Khan"
}
console.log(objectInfo.fullName.apply(objectInfo1, ["Dhaka", "Bangladesh"]));

// find max number from array
const maxNumber = [2, 4, 5, 56, 656, 777];
const maxNumberFind = Math.max.apply(Math, maxNumber);
console.log(maxNumberFind);

// find min number from array
const minNumber = [3, 4, 5, 6, 1, 45];
const minNumberFind = Math.min.apply(Math, minNumber);
console.log(minNumberFind);

// Closures
// counter dilemma
// let counter = 0; // this is a global variable > eta diya declare korle problem hobe.
// function counterFunc () {
//   let counter = 0; // this is a local variable
//   counter += 1;
//   return counter;
// }
// counterFunc();
// counterFunc();
// counterFunc();
// console.log(counter);
function addCounter () {
  let counter = 0;

  function plus () {
    counter += 1;
  }

  plus();
  return counter;
}

console.log(addCounter());
