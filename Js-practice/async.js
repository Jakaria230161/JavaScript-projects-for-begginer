/* 
async function
---------------
1, callBack function > I will callback later, mane ekta function er moddhe jokhon arekta function parameter hisebe pathano hoy setai holo callback function.
*/
// example : eikhane 2 bar function call korte hoyeche jeta ekta problem r ei problem er solution niche deowa holo
function myDisplay (some) {
  console.log(some)
}

function myCalculator (num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator (5, 5);
myDisplay(result);

// this is the solution , that's called callback function
function display (some) {
  console.log(some)
}
function calculator (num1, num2, myCallback) {
  let sum1 = num1 + num2;

  if(myCallback) myCallback(sum1); // callback function ache kina? tar checking , thakle output asbe noile asbe na
  return sum1;
}
calculator(3, 4, display);

// asynchronous function and synchronous function
//console.log("Number 1 line code");

setTimeout(() => {
 // console.log("Number 2 line code")
}, 1000);

// setInterval(() => { // 2 seconds por por Number 3 line code print hote thakbe
//   console.log("Number 3 line code")
// }, 2000);

//console.log("Number 4 line code");

// callback function pattern
// const paymentSuccess = true;
// const marks = 70;

// function enroll (callback) {
//   console.log("Course Enrollment is in progress!")
  
//   setTimeout(() => {
//     if (paymentSuccess) {
//       callback();
//     } else {
//       console.log("Payment is failed!")
//     }
//   }, 2000);
// }

// function progress (callback) {
//   console.log("Course progress on...");

//   setTimeout(() => {
//     if (marks >= 80) {
//       callback();
//     } else {
//       console.log("You could not get enough marks to get certificates!");
//     }
//   },3000);
// }

// function getCertificate () {
//   console.log("Your certificate is preparing !!");

//   setTimeout(() => {
//     console.log("Congratulations! you got your certificate!");
//   }, 1000);
// }

/* 
enroll();
progress();
gerCertificate();
emon kore call dile pura joga-khichuri hoye jabe. bcz callback function need a parameter, ja eivabe call dile parameter pathano jay na. tai anonymous function er maddhome parameter diye call dite hobe.
*/
// enroll(function() {
//   progress(getCertificate)
// });


// Promise syntax example
const statusMessage = false;
console.log("Task 1");

// Promise definitions / producing promise
const promise = new Promise(function (resolve, reject) {

  setTimeout(() => {
    if (statusMessage) {
      resolve("Task 2");
    } else {
      reject ("Failed to execute Task 2 !!");
    }
  }, 2000);
  
})

// Promise call / consuming code
// promise
//       .then((value) => {
//         console.log(value)
//       })
//       .catch( (err) => {
//         console.log(err)
//       })

// console.log("Task 3");

// Promise syntax
const paymentSuccess = true;
const marks = 90;

function enroll () {
  console.log("Course Enrollment is in progress!")
  
  const promise = new Promise (function (resolve, reject) {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment is failed!")
      }
    }, 2000);
  })
  return promise;
}

function progress () {
  console.log("Course progress on...");

  const promise = new Promise (function (resolve, reject) {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get certificates!");
      }
    },3000);
  })
  return promise;
}

function getCertificate () {
  console.log("Your certificate is preparing !!");

  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Congratulations! you got your certificate!");
    }, 1000);
  })
  return promise;
}

//Promise call
// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function(value) {
//     console.log(value)
//   })
//   .catch(function(err) {
//     console.log(err)
//   })

// async - await version
async function course () {
  try {
    await enroll();
  await progress();
  const message = await getCertificate();
  console.log(message);
  } catch (err) {
    console.log(err)
  }
} 

// course();