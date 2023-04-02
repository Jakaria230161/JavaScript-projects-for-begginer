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

