// 1 to 6 number randomly print
// const randomNumberFunction = (value) => {
//   const rndNum = Math.floor(Math.random() * value) + 1;
//   console.log("1 to 6 random number printed : " + rndNum);
// }
// randomNumberFunction(6);

//Problem 01: this is perfect way to get random numbers dynamically according to your needs.
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Dynamically random generator: " + getRandomNumber(1, 6));

// Problem 02: How to arrange all students names in alphabetically order
const students = ["Jakaria", "Imran", "Hridoy", "Ayesha", "Amina", "Jui"];
const sortedStudent = students.sort();
console.log(sortedStudent);

// Problem 03: How to arrange all roll numbers in alphabetically
const rollNumbers = [5, 6, 3, 7, 8, 9, 1];
const sortedRoll = rollNumbers.sort(function(a, b) {
  return a - b;
});
console.log(sortedRoll);
// console.log(rollNumbers.sort(function(a, b) {
//   return a - b;
// }))

// Problem 04: Leap Year
const isLeapYear = (year) => {
  if (year  % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2028);

// Problem 05: how to find out vowel in array
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const vowelsCounting = sentence => {
  let count = 0;

  const letters = Array.from(sentence);

  letters.forEach(function(value){

    if(vowels.includes(value)) {
      count++;
    }
  })
  
  return count;
}
console.log(vowelsCounting("I love Bangladesh"));

// how to find out duplicates numbers in array
const dupNumbers = [1, 4, 1, 6, 8, 6, 8, 10, 11, 34, 56, 77];

const findDuplicates = dupNumbers.filter(function(value, index, array) {
  return array.indexOf(value) !== index;

})
console.log(findDuplicates);

// how to find out unique numbers in array
const uniNumbers = [1, 4, 1, 6, 8, 6, 8, 10, 8, 11, 34, 56, 77];
const findUnique = uniNumbers.filter(function(value, index, array) {
  return array.indexOf(value) === index;
})
console.log(findUnique);

// Problem 06: Jakaria koto bar ache? r prothom koto number position a ache?
const sentences = "I am Jakaria Mahmud. I am 25 years old and I am also married last year with Ayesha Siddika. Jakaria is good boy everyone tell me. Jakaria is coder.Jakaria is a programmer. Jakaria is web developer.";

const matches = sentences.match(/jakaria/ig);
const occurrences = matches ? matches.length : 0;
console.log(matches);
let positionSentence = sentences.search(/jakariaa/i);
positionSentence = positionSentence >= 0 ? positionSentence : "Not found!";
console.log(positionSentence);

// Problem 06: 
// const linearArray = [];
const linearFunction = (arr, val) => {
  const arrLen = arr.length;
  for ( let i = 0; i < arrLen; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "Not found!";
}

console.log(linearFunction(['a', 'b', 'c', 'd', 'e', 'f'], 'e'));

// Problem 07 : 
const longestString = (names) => {
  let longestWord = ''; // eikhane const diya declare korle hobe na
  for (name of names) {
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['Jakaria', 'jakaria mahmud', 'Learn with Jakaria', 'Learn with Jakaria mahmud']));

// Problem 08: 

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } 
    else if (i % 3 === 0) {
      console.log(`${i} is fizz`);
    } 
    else if (i % 5 === 0) {
      console.log(`${i} is buzz`);
    } 
    else {
      console.log(i);
    }
  }
}
fizzBuzz(100);

// Problem 09 : removes falsy values from the array
const mixedArray = [
  'Jakaria',
  undefined,
  'learn with Jakaria',
  false,
  'Imran',
  true,
  'Do not quarrel',
  null,
  'Watermelon',
  '',
  0,
  NaN,
  'Thanks all'
]

// one way to solve this
// const trueArray = mixedArray.filter(function (value) {
//   if(value) {
//     return true;
//   }
//   else {
//     return false;
//   }
// })
// another way to solve this problem 
const trueArray = mixedArray.filter(Boolean);
console.log(trueArray);

// Problem 10 : remove falsy values from objects
const mixedObj = {
  a: "Jakaria",
  b: "",
  c: "Hi",
  d: false,
  e: "hello",
  f: undefined,
  g: "world",
  h: null,
  i: "Love",
  j: NaN,
  k: "lala",
  l: 0,
  m: "Thanks"
}
const trueObj = (mixedObj) => {
  for(let i in mixedObj) {
    if(!mixedObj[i]) {
      delete mixedObj[i];
    }
  }
  return mixedObj;
}
console.log(trueObj(mixedObj));