// setItem (key, value) = sob gula string haowa lagbe
localStorage.setItem("userName", "Jakaria");
localStorage.setItem("userPassword", "catdogmini");

// getItem (key)
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("userPassword");
console.log(userName);
console.log(userPassword);

// update setItem 
localStorage.setItem("userName", "Imran");
localStorage.setItem("userPassword", "catdoogminii");

// remove item
localStorage.removeItem("userName");
localStorage.removeItem("userPassword");

// how to set array 
const countries = ["Bangladesh", "Canada", "America", "London", "Saudi Arabia"];
// use setItem and convert to string to use JSON.stringify
localStorage.setItem("countries", JSON.stringify(countries));
// use getItem and parse to convert it
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);
// use setItem
const booksName = ["English", "Bangla", "GK", "Math", "Grammar"];
localStorage.setItem("booksName", JSON.stringify(booksName));
// use getItem
const booksNameList = JSON.parse(localStorage.getItem("booksName"));
console.log(booksNameList);

const favoriteColors = ["white", "black", "blue", "maroon"];
localStorage.setItem("favoriteColors", JSON.stringify(favoriteColors));
const favoriteColorsList = JSON.parse(localStorage.getItem("favoriteColors"));
console.log(favoriteColorsList);


/* sessionStorage */
sessionStorage.setItem("id", "101");
sessionStorage.setItem("name", "imran");
const userId = sessionStorage.getItem("id");
console.log(userId);
const userNameCheck = sessionStorage.getItem("name");
sessionStorage.removeItem("name");
console.log(userNameCheck);

const studentInfo = {
  id : 101,
  name : "Imran",
  institute : "Islamic University",
  cgpa: 3.25
}

sessionStorage.setItem("studentInfo", JSON.stringify(studentInfo));
const studentInfoCheck = JSON.parse(sessionStorage.getItem("studentInfo"));
console.log(studentInfoCheck);

