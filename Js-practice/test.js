// Use console
console.log('Hello world! from js')


// Get by id and change the value according to the innerHTML values
document.getElementById('demo-1').innerHTML = "Hi there, change the result of the demo-1 header content.";

document.getElementById('demo-2').innerHTML = 5+5;  // show on the screen 10


// Declare a variable and display on the screen.
let a, b, c
a = 5;
b = 6;
c = a + b;

document.getElementById('demo-3').innerHTML = c;  // show the results of c

// Testing block scope
{
  let x = 9;
  console.log(x); // here x can be access because this area of x variable
}
// console.log(x); // here x can not access because let is a block scope

{
  var m = 5;
  console.log(m); // var is a global scope
}
console.log(m);

let n; // declare a variable, let does not need a value for declaration , you can assign value after declaration
n = 5;

n = 7; // let can reassign value but can't redeclare a variable

// const f; this is not work because const need a value.
const f = 8; // declare a const variable, where can't redeclare and  also reassign a value. this is constant. (note: One thing about const, must be assign value rather it doesn't work like let)

/* 
When to use JavaScript const?
1, A new array const a = [1, 2, 3, 4];
2, A new object const a = {name: 'Jakaria', value: 'chill'}
3, A new Function
4, A new RegExp(Regular Expressions)
*/

let r = 5 + 5;
let s = '5' + 5;
let t = 'hi' + 5;

console.log(typeof r);
console.log(typeof s);
console.log(typeof t);

// Declare a object
const myObject = {firstName: "Jakaria", lastName: "mahmud", age: 25, eyeColor: "black", address: "kushtia"};

console.log(myObject)

// Declare a function with parameters and also arguments. You have to know that, parameters and arguments are not the same. parameters one kind of parameter's values, which i called.
function sleep (person, time) {
  console.log(person + ' is sleeping at ' + time);
}

/* 
Matters of function call: 
1, can call automatically
2. can call when user call by button press
3,when it's invoked in js code etc
*/

sleep("Jakaria", "4AM");  // This is function call, if you won't call the function then you can't get any value. you can declare a function and anytime & anywhere you call the function which is you declared above.If you set a parameter then you can call according to your needs.

sleep("Imran", "10PM");  // This is function call, if you won't call the function then you can't get any value. you can declare a function and anytime & anywhere you call the function which is you declared above.

console.log("'i won't sleep at 10PM'");

function myNumber (num1, num2) {
  console.log('Hi my number!');
  //return num1 * num2; // if we did not return then we get an undefined value
  return num1 + num2;
}

let sum = myNumber(2 , 3);
console.log(sum);

// Object denote (In case of create object, array, RegExp , function, you should use const keyword)
const myCar = {
  name : "BMW",
  color : "Black",
  weight : "899kg",
  model : 599,
  start : function() {
    this.drive();
    console.log("Car has started"); // this is method(function and method are same in object creation.)
  },
  drive : function() {
    console.log("Car is driving");
  },
  stop : function() {
    console.log("Car is stopped");
  }
}

console.log(myCar);
console.log(myCar.model);
console.log(myCar ['weight']); // array er maddhome pete chaile quote use korte hobe, noyto onno ekta variable khojar chesta korbe.

myCar.stop();  // this is called function which is declared in the object.

function myFunction (p1, p2) {
  return p1 * p2;
}
console.log(myFunction(2, 4));


// Convert from celsius to fahrenheit
function toCelsius (fahrenheit) {
  return (5/9) * (fahrenheit - 32);
}

let convertedFahrenheit = toCelsius(77);
console.log(convertedFahrenheit);

// Date function for finding time
function seeTime() {
  document.getElementById('time').innerHTML = Date();
}

// property length
let text = "abcdefghij klmnopqrstuv wxyz"
let textLength = text.length;  // Length use for finding properties length. but if you give any spaces in the string it would be counted as empty string then length will be increase. mane eikhane 26 ta letter ache tai 26 ta dekhabe length use kore r jodi space dei taile oitao count korbe and increase hobe. ami taile 2 ta space dibo then 26 + 2 = 28 hobe.
console.log(textLength);

// Escape characters \(back slash) and line boro hoile onno line a read korte  hole \ slash dite hobe, onnothay error dibe bcz js arekta statement vabbe. 80 characters er beshi read kora kothin tai new line a jaoowar jonne \ use korte hoy. tobe best hocche + othoba break tag use kora. bcz back slash anek browser support kre na
let escapeChar = "We are come from \"Dhaka\" to here \
for higher study"
console.log(escapeChar);

// String can be object > using new keyword
let x = "life line";
let y = new String("life line");
console.log(typeof x);
console.log(typeof y);

/* 
1, == compare only values
2, === compare values and types
3, but objects are same then can not be compared using double equals or triple equals. objects can not be compared.
*/

// String methods //

// String slice(start, end) methods
let str = "Apple, Banana, Jack-fruits";
console.log(str.slice(7, 13));

let sliceFruits = "Apple, Orange, Lemon";
let sliceFruit = sliceFruits.slice(-13); // if you want to slice using right side(minis sign) and also can slice from one side.
console.log(sliceFruit);

// substr methods this is also slice types 
let subStr = "Lemon, Orange, Apple";
console.log(subStr.substr(7, 6)); // substr mane 1st kop ta holo starting kop and 2nd kop ta holo porer koto character porjonto kop ta nibe, jemon 7(lemon porjonto kete nise r 6 (mane koper porer 6 character nibe jemon orange 6 character))


//  replace methods > jeta replace korbo seta dite hobe r replace kore jeta dibo setao dite hobe, eta mone rakhte hobe je 1st er tai shudhu raplace hobe,aro mone rakhte hobe je eta case sensitive tai jei case same haowa lagbe , choto boro case hole hobe na. tobe hae regular expression diye /g diye case insensitive kora jabe.
let replaceStr = "I love Bangladesh & Bangladesh";
let newReplaceStr = replaceStr.replace("Bangladesh", "Saudi Arabia");
console.log(newReplaceStr);

// toUpperCase methods
let upper = "i love my country";
let toUpper = upper.toUpperCase();
console.log(toUpper);

// toLowerCase methods
let lower = "I LOVE MY COUNTRY";
let toLower = lower.toLowerCase();
console.log(toLower);

// concat methods
let txt1 = "Jakaria";
let txt2 = "Mahmud";
let concatWithTxt1AndTxt2 = txt1.concat(" ",txt2); // empty string for space(" ") and important things is kar upor concat ta korchi.
console.log(concatWithTxt1AndTxt2);

/* 
[NOTE:All string methods return new string.
  mone rakhte hobe je,protita string kintu ager ta change kore na, just notun ekta string create kore.original string can not be changed just it being replaced or nothing, string is immutable. that's why it can not be changed.]
*/

// trim methods> use for unnecessary spaces removed
let trm = "      love world!      ";  // space are being removed by trim
console.log(trm.trim());

// charAt methods > jodi ekta string katte chao tahole charAt use korte hobe r konta index postion ta katbe ta bole dite hobe.
let singleChar = "Love you";
console.log(singleChar.charAt(1));
console.log(typeof singleChar.charAt(500));  // charAt jodi exact sring na pay taile hocche ekta empty string return korbe.
console.log(singleChar[1]);
console.log(typeof singleChar[500]); // [] eivabe jodi katte hoy r jodi exact string na pay taile undefiend values return korbe.undefined also a data type and value

// charCodeAt methods > return just unicode 16 values.
let charCode = "Love you";
console.log(charCode.charCodeAt(2));

// split methods > jodi string ke array a convert korte hoy taile split methods use korai hobe buddhimaner kaj.tai split(er moddhe bole dite hobe ki dite split > piece piece korbo) > basically split always ekta array return kore.
let splitMethods = "Love you";
console.log(splitMethods.split("")); // blank string dile , protitare character re split korbe.
console.log(splitMethods.split(" ")); // split call na dile function type dekhabe r call dile object dekhabe. ekhon ekta array return korbe