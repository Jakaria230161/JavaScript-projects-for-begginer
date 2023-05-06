// console.log(document.getElementById("demo"));
document.getElementById("demo").innerHTML = "Good Morning DOM Mia";
// change attributes
const elements = document.getElementById("changeAttribute");
elements.src = "change.jpg";
// date
const date = document.getElementById("todayDate");
date.innerHTML = "Today's Date :" + " " + Date();
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("btn").innerHTML = "I love to coding";
})

// form1
const getForm = document.forms["frm1"];

let text = "";
for(let i = 0; i < getForm.length; i++) {
  text += getForm.elements[i].value + "<br>";
}

document.getElementById("formOne").innerHTML = text;
formOne.style.color = "tomato";

//Number validation
function myNumberFunction () {
  let x = document.getElementById("numb").value;
  console.log(x)

  let para;
  if (isNaN(x) || x < 1 || x > 10) {
    para = "Invalid number";
  } else {
    para = "Input Ok!"
  }
  document.getElementById("message").innerHTML = para;
  message.style.color = "red";
  message.style.fontSize = "2rem";
}

// Events exploring
function changeText () {
  const changeText = document.querySelector("#changeText");
  changeText.innerHTML = "Right now changing text!";
  changeText.style.color = "blue";
}

const myBtn = document.querySelector("#myBtn");
myBtn.onclick = function () {
  myBtn.innerHTML = "I am changing Text!!";
  myBtn.style.color = "green";
  myBtn.style.fontSize = "2rem";
}

const btnId = document.getElementById("btnId");
btnId.addEventListener("click", function () {
  btnId.innerHTML = "Hi I am changing by addEventListener!!";
  btnId.style.color = "red";
  btnId.style.fontSize = "2rem";
})

const divContainer = document.getElementById("div-container");
divContainer.addEventListener("mousemove", myDiv)
divContainer.style.color = "white";
divContainer.style.width = "400px";
divContainer.style.height = "400px";
divContainer.style.backgroundColor = "tomato";

function myDiv () {
  document.getElementById("mouse-over").innerHTML = "Thank you";
}

function removeHandler () {
  document.getElementById("div-container").removeEventListener("mousemove", myDiv)
}

// bubbling and capturing
const container = document.querySelector("#container");
container.addEventListener("click", function () {
  console.log("I a div")
}, true); // true namok 3 number parameters deowar karone eta ekhon bubbling mood theke capturing mood a chole asche.
const idBtn = document.querySelector("#idBtn");
idBtn.addEventListener("click", function () {
  console.log("I a idBtn")
}, true);  // true namok 3 number parameters deowar karone eta ekhon bubbling mood theke capturing mood a chole asche.


/* 
Navigation in DOM
1, parentNode
2,chidNodes (nodeNumber)
3, firstChild
4, lastChild
5, nextSibling
6, previousSibling

*/
const p = document.getElementById("checker");
const way1 = p.innerHTML;
console.log("I fined with innerHTML : " + way1);
const way2 = p.firstChild.nodeValue;
console.log(`I fined with firstChild.nodeValue : ${way2}`);
const way3 = p.nodeChild[0].nodeValue;
console.log(`I fined with nodeChild[0].nodeValue : ${way3}`);


// create elements
// const paragraph = document.createElement("p");
// const node = document.createTextNode("I am third paragraph");
// paragraph.appendChild(node);

// const elem = document.getElementById("div10");
// elem.appendChild(paragraph);


// insertBefore
// const pCreate = document.createElement("p");
// const nodeCreate = document.createTextNode("I am 3rd text");
// pCreate.appendChild(nodeCreate);

// const div10 = document.querySelector("#div10");
// const para = document.getElementById("paragraph-1");
// div10.insertBefore(pCreate, para);

// remove eta oder version ja new browser a kaj kore na
// const removeElem  = document.getElementById("remove");
// removeElem.remove();

// removeChild eta new version ja sob browser a kaj kore
// const div10 = document.getElementById("div10");
// const removeElem = document.getElementById("remove");
// div10.removeChild(removeElem);


// HTMLCollection is a object not a array but it is looks like an array.it's return array list / collection. tobe eta kintu array na, eta kintu object e but dekhte array er moto.HTMLCollection er upor loop kora jabe but pop,push,join eisob method use kra jabe na bcz eta ekta object, eta array hoile eisob array method gula use kra jetoh. tai amra HTMLCollection ke object e bolbo , eta just dekhte array er moto.

/* 
HTMLCollection vs NodeList
1, id, name, index number diye accessed kra jay vs eta shudhu e index number diye accesse kora jay.

*/