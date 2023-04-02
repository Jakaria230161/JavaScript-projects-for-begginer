// How to declare a variable 
// var x;
// let y;
// x = 5;
// y = 6;
// let z = x + y;
// console.log(z);

// Let  hoilo block scope kintu var hoilo global scope> let can not be re declared(let x = 5 , let x = 6 this is you can not declare with let)
/* 
var vs let vs const
1,var o hoisted hoy r pasapasi value assign kore kintu vs let o hoisted hoye upre jay kintu kono value assign kore na tai reference error dey.
2, let ke kintu re declare kora jay na kintu reassign kora jay but const er belay redeclare and reassign o kora jay na
3, let er belay age declare kore pore value assign kora jay kintu const er belay agei value assign kore declare kore neowa lagbe mane initialization kore nite hobe.
We use const > object,array, functions , regular expressions
4, tobe amra const er belay jokhon array declare korbo tokhon amra array te new element push korte parbo + index onujayi value change korte parbo
5,typeof o kintu ek dhoroner operator 
6,Operator (+ - / * ** ++ -- typeof )
*/

function myStudent (name, message, options) {
  console.log(name + " Hi my dear students!" + message + options);
}

myStudent("Jakaria", "How are you?", "true or false?");
myStudent("Imran", "What are you doing?", "answer or not?");
myStudent("Hridoy", "When you are ready for discussion?", "come or not?");

// how to access array of last elements
const car = ["Fiat", "BMW", "Mercedes"];
car[3] = "Volvo";
for(let i = 0; i < car.length; i++) { // for looping
  console.log(car[i]);
}
console.log(car[car.length - 1]); // this is way to access array of last elements, this is dynamically accessed last element of array

// using forEach
const fan = ["hand fan", "single fan", "double fan", "celling fan"];


const fanFunction = value => { // es6 function forEach function 
  console.log(value)
}
fan.forEach(fanFunction); // array er khetre always forEach use kora better.

const d = new Date();
const fullYear = d.setFullYear(2023, 04, 03);
console.log(fullYear);


// Random number generator 0 to 9
const randomNumber = Math.floor(Math.random() * 10); // return random number 0 to 9 r jodi 10 porjonto pete chai taile 11 diya gun dite hobe.
console.log("0 to 9 random number : " + randomNumber);

// Random number generator 1 to 10
const randomNumbers = Math.floor(Math.random() * 10) + 1;
console.log("1 to 10 random numbers: " + randomNumbers);

// 1 to 100 random numbers generator
const randomsNum = Math.floor(Math.random() * 100) + 1;
console.log("1 to 100 random numbers : " + randomsNum);

// Boolean
/* 
1, with value = always true hobe seta(positive number, negative number, string, anything)
2, without value = always false hobe such( 0, -0, null, undefined, empty string NaN, nijeo false othoba kichui na dile false dibe)
3, falsy value = [0 , - 0, false, empty string, NaN, undefined, null]
Note : JavaScript two objects value comparison always will returns false
*/
// ternary comparison
let age = 25;
const ternaryComparison = (age <= 25) ? "You are adult now":"You are baby";
console.log(ternaryComparison);

// if (age >= 25) {
//   console.log("You are adult now"); //  
// } else {
//   console.log("You are baby");
// }

const isSleep = (name, time, message) => {
  console.log(`${name} is sleeping at ${time}, okay dear ! ${message}`);
}
isSleep("Ayesha", "12 PM", "Ghumao tumi, Ummah");

// check valid number
let myAge = "26";
myAge = Number(myAge); // convert to number
if(isNaN(myAge)) {
  console.log("Invalid number, Please enter a valid number");
} else {
  console.log(age < 25 ? "You are mature" : "You are young");
}


// If, else if , else condition
let yourAge = 0;

const checkAge = yourAge => {

  if (yourAge > 25 && yourAge <= 40) {
    console.log("You are matured");

  } else if(yourAge === 25) {
    console.log("You are young guy!")

  } else if (yourAge < 25) {
    console.log("You are baby!!")

  } else{
    console.log("You are old guy!!")
  }
}
checkAge(25)

// switch, case, break, default
// switch(new Date().getDate()) {
//   case 0 :
//     day = "Sunday";
//     break;
//   case 1 :
//     day = "Monday";
//     break;
//   case 2 : 
//     day = "Tuesday";
//     break;
//   case 3 :
//     day = "Wednesday";
//     break;
//   case 4 : 
//     day = "Thursday";
//     break;
//   case 5 : 
//     day = "Friday";
//   default : 
//     day = "Saturday";  
// }

// strict comparison with switch statement
// let switchValue = "4";
// switchValue = Number (switchValue);
// switch (switchValue) {
//   case 1 : 
//   text = "This is number";
//   break;
//   case 2 : 
//   text = "This is not a number";
//   break;
//   default : 
//   text = "Not value found here"
// }

// for loop = array er jonne use korte hoy r seta jodi number hoy taile use kora better but objects er belay noy. objects er belay for in loop use kora uchiy. tobe array er belay forEach use kora better
let myValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let len = myValues.length; // length shorthand
for (let i = 0; i < len; i++) {
  console.log(i);
  console.log(myValues[i]);
  console.log("==========")
}

// forEach for better for array
// const valueFunction = (value) => {
//   console.log(value)
// }
// myValues.forEach(valueFunction);
// valueFunction();

// for in loop = object er belay for in loop use kora better
const bus = {
  name : "SB bus",
  model : 500,
  weight : "850kg"
}
for (let x in bus) {
  console.log(bus["model"])
  console.log(x);
  console.log(bus.name)
  console.log(bus[x]);
  console.log("-------")
}

// for in loop = array > array khetre for in loop amra use korbo na, bcz array er khetre index and order important. for in loop use korbo object er khetre
// array er khetre = forEach use kora better, tobe for loop, for of loop use kora jay, just for in loop kora thik na bcz array er khetre index and order important.
const busName = ["Sakura", "Hanif", "SB", "Green Line"];
for(let x in busName) {
  console.log(busName[x]);
}

const num = [1, 3, 4, 5, 6, 7];
for (let x in num) {
  console.log(num[x]);
}

/* 
loop jar upre kora jay, iterable er upor loop kora jay.
iterable = array, maps, strings, NodeList

*/

// for of loop = on string 
let z = "Jakaria";
for(let x of z) {
  console.log(x);
}

// break in loop
let brk = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < 10; i++) {
  if (i === 3) 
  {break;}
  console.log(brk[i]);
}
//continue in loop
let cnt = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < 10; i++) {
  if (i === 3) 
  {continue;}
  console.log(cnt[i]);
}

// set methods create
const letters = new Set (['a', 'b', 'c', 'd','e']);
// add elements in set methods
letters.add('f');
letters.add('g');
// delete elements from set methods
letters.delete('f');
// has methods
letters.has('g');
// values methods for set methods
console.log(letters.values());
// forEach method in set
let setText = '';
letters.forEach(function(value) {
  setText += value;
})
console.log("forEach methods in set : " + setText);
console.log(letters);

// create a map
let createMap = new Map([
  ["fName", "Jakaria"],
  ["lName", "Mahmud"],
  ["fullName", "Jakaria Mahmud"],
  ["age", 25]
]);
// set value in the map
createMap.set('institute', 'Islamic University');
console.log(createMap);

/* 
typeof = er typeof hobe string, typeof ekta operator tai er kono data type nai. tobe eta string return korbe.
object = er typeof hobe string
jokhon kono variable ke .constructor kora hoy tokhon tar Capital ta return korbe jemon 'Jhon'.constructor > return korbe function String | 3.25.constructor hoy taile return korbe > function Number | function myFunction() {}.constructor > return korbe > function Function
*/

// Constructor > always return a function
// const isArray = (myArray) => {
//   console.log(myArray.constructor.toString().indexOf("Array") > -1);
// }
// isArray([1,3, 5]);

// simple checker Constructor 
function isArray(arr) {
  return arr.constructor === Array;
}
const findArray = isArray({fname: 'Jakaria'});
console.log(findArray);

// date er constructor
const isDate = myDate => {
  return myDate.constructor === Date;
}
const dateCheck = isDate(2022-02-22);
console.log(dateCheck);

/* 
Objects
--------
1, Objects
2, Array
3, Null
4, Number
5, Date
6, String

Date types - these are contain value
-----------
1, string
2, number
3, boolean
4, object
5, function

Data types - these are not contain value
-----------
1, null > nothing
2, undefined > return typeof undefined
Note : null and empty ek jinis noy. null er typeof objects r empty er typeof asbe string.

undefined Vs null
-----------------
1,undefined mane value nai but memory te ache vs null hoilo ja exist e kore na.
2,undefined > undefined vs null > object
3,undefined === null > false
4,undefined == null > true
5, 2 ta value same but type different

*/

// Conversion
// String to number
console.log("convert string to number: " + Number('3.25'));
console.log(Number(''));
console.log(Number('98 78'));

// boolean to string
console.log(String(true));
console.log(String(false));
console.log(true.toString());

// boolean to number
console.log(Number(true));
console.log(Number(false));

// binary to decimal
const bin2Dec = (bin) => {
  return parseInt(bin, 2).toString(10);
}
console.log('converted to binary : ' + bin2Dec(11110000));

// decimal to binary
const dec2Bin = (dec) => {
  // converted to binary > both are correct
  // return parseFloat(dec, 10).toString(2);
  return (dec >>> 0).toString(2);
}
console.log('converted to binary : ' + dec2Bin(48));