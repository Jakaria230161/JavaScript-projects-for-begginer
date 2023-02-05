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