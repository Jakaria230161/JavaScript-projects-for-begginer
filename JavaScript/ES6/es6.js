// ES-6 arrow functions
const number = () => 10; // this is very shorthand for arrow functions if it is one line statement.
console.log(number());

// Normal function of above function
// function number () {
//   return 10;
// }
// console.log(number());

const number1 = (a, b) => a + b;
console.log(number1(6, 8));

const javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function() {
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  } // eikhane forEach re arrow function diya na korle this re alada variable a rekhe kaj korte hoto. noile undefined hoto. arrow function this  re niya concern e na.
}
javascript.printLibraries();


// select elements
const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

// show window object properties
function show () {
  display.innerHTML = this.value;

  setTimeout(() =>  { // eikhane arrow function na dile this.value ta undefined asbe, you have typed undefined r jodi arrow function dei taile perfectly kaj korbe
    thanks.innerHTML = `You have typed : ${this.value}`;
    thanks.style.color = "Blue";
    thanks.style.fontSize = "2rem";
  }, 1000);
}

searchInput.addEventListener("keyup", show);

/* 
This keyword all rules only for normal function but arrow functions does not care about this
*/
