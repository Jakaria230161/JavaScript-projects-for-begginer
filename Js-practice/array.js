/* 
You have to know that, array also one kind of object. Js sob kichu kei object hisebe think kore r eta thekei sob kichu create kre r ki.
ARRAY: Js array are used to store multiple values in a single variable.
1,Array er moddhe arekta array rakha jay.
2, array er moddhe arekta objects rakha jay
3, array er moddhe arekta functions rakha jay.
4, array er moddhe bivinno dhoroner data type rakha jay > numbers, strings. boolean etc.
5, multiple values store kora jay.

Create an array: using an literal is easiest way to create js array.
Example:  > one line array creates this example
let array = [2, 4, 6, 7];
Example: > multiple line a array lekha jay, tobe comma deowa lagbe.
let myName = [
"Jakaria",
"Imran",
"Hridoy"
];
Example: > age blank array create kre , then values provide kora jay
let myCar = [];
myCar[0] = "BMW",
myCar[1] = "Saab",
myCar[2] = "Lamborgini",    
*/

// Changing array elements and create

let myCarArray = [
  "BMW",
  "Saab",
  "Lamborgini"
];
// display the myCarArray
document.getElementById("demo-5").innerHTML = myCarArray;
myCarArray[0] = "TATA"; // changed first index number car
console.log(myCarArray);
// check array length
console.log(myCarArray.length); // output 3 > bcz myCarArray te 3 ta element ache.
// array sort korbe according to alphabetically
console.log(myCarArray.sort()); // output (3) ['Lamborgini', 'Saab', 'TATA']
// array accessing last element > array.length-1 dite hoy,
// r noile pore jodi onno ekta element add kore taile toh r paowa jabe na.
// dynamically change  chaile emon korte hobe.
console.log(myCarArray[myCarArray.length - 1]); // output Lamborgini/TATA(sorted thakle eta asbe r noile last element mane lammborgini asbe.) > eta sobar last a array te asche tai eta output hobe.

// array in for loop implement > loop mane element sob gula ses na haowa obdhi dekha. ekta ekta kore jaowa
let fruits = ["Mango", "Banana", "Apple", "Jack-fruits"];
//let flen = fruits.length; > length er shorthand

// for loop > (iteration; condition; increment or decrement) {console.log}
for (i = 0; i < fruits.length; i++) {
  console.log(i);
  console.log(fruits[i]);
}
console.log("finished");

// forEach > array er jonne always forEach use kora better
let myFriends = ["Jakaria", "Imran", "Hridoy", "Bou"];
let fLen = myFriends.length;

myFriends[fLen] = "Guzal Hatun"; // dynamically element last add kora holo, ete undefined asbe na, jodi na bhule index number a add kore element.

myFriends.push("Ayesha"); // array er moddhe element add kora hoiche, push> last a element add kore. index onujayi add korar khetre length diye kora better.

function friends (value) {
  console.log(value) // sob gulo re print korbe, ses kora na obdhi.
}
myFriends.forEach(friends);
console.log(Array.isArray(myFriends)); // output true > eivabe array check korte hoy, array hole true r noile false return korbe.
console.log(myFriends instanceof Array); // true

/*
Array vs Object : 
1, Array for number index > array te named index dile js object a redefine kore ney tai result incorrect ase. tai amara number index use kori. number hoile array use korte hobe, array one kind of special object.
2, object for named index. > string(text) hoile object use korte hbe.
amra kivabe chinbo je eta array naki object?jeikhane typeof korle 2 ta e object ase. tai array er jonne Array.isArray() othoba instanceof > numbers instanceof Array
*/

// convert array to string
let p2 = ["apple", "jam", "lemon"];
console.log(typeof p2); // output : object
console.log(p2.toString(p2)); // output : apple,jam,lemon

// join method > you can customize , mane ki diye string ke devide korbe
let p3 = ["apple", "jam", "mango"];
console.log(p3.join(" * ")); // output : apple * jam * mango

// Pop method > array er last element ber kore dey r nijer moddhe jeta ber kore dey seta store kore rakhe.
let p4 = ["apple","jam", "kathal"];
let p5 = p4.pop();
console.log(p4); // output : (3) ['apple', 'jam', 'kathal'] r pop hoile kintu kathal r thakbe na
console.log(p4.pop()); // kathal ber kore diche
console.log(p5); // output : kathal ke store kore rakhche,

// push method > array er last a ekta element add kre dey
let p6 = ["mango", "jam", "banana"];
let pushElement = p6.push("apple");
console.log(pushElement); // output : 4 bcz ekhon push er ta soho 4 ta element ache array te.
console.log(p6); // output :  ['mango', 'jam', 'banana', 'apple']

// shift methods > jeta pop er opposite > ja array 1st element ber kre niye ase.
let s1 = ["Mango", "Kathal", "Jam"];
let shiftElement = s1.shift(); // output : mango
console.log(shiftElement);
console.log(s1); // output : kathal, jam bcz mango tule neowa hoyehce shift er maddhome

// unshift methods > push er opposite > ja array 1st element ekta element add korbe
let s2 = ["jam", "tam", "lam"];
let unshiftElement = s2.unshift("lulu");
console.log(unshiftElement); // 4 ta element bcz new ekta add kora hoyeche.
console.log(s2); // output : ['lulu', 'jam', 'tam', 'lam']

// changes elements using by array index number
let changing = ["jam", "tam", "amra", "kamra"];
changing[1] = "tuk";
console.log(changing); // output:  ['jam', 'tuk', 'amra', 'kamra'] 1 number index has been changed, which was tam but right now is being tuk.

// delete methods > jeta delete kore dey, jeta tumi korte chao > jeta ekta undefined holes create kre tai use koro pop or push method for delete
let del = ["tum", "tam", "lul"];
delete del[0];
console.log(del); // output : [empty, 'tam', 'lul'] > array er length kintu change kore nai, just 1st er ta delete kre diche.

// splice methods > this is fully controlled for elements adds or removes, eikhane main array change hoye jacche.
let slc = ["tum", "tam", "lul"];
let slcPart = slc.splice(2, 0, "kum", "lum");
console.log(slc); // output : ['tum', 'tam', 'kum', 'lum', 'lul']

let slcc = ["tum", "tum", "kum"];
let slccPart = slcc.splice(0, 1);
console.log(slcc);

// concat methods > string jora laganor jonne concat use kra better.etay main array change hocche na, just new ekta array create hocche.
let myBoys = ["Abdullah", "Abdur Rahman", "Imran"];
let myGirls = ["Khiyam", "Himu", "Tayba"];
let herChild = ["Jaber", "Rashed", "Rabeya"];
let myChildren = myBoys.concat(myGirls);
console.log(myChildren); // output :  ['Abdullah', 'Abdur Rahman', 'Imran', 'Khiyam', 'Himu', 'Tayba']
console.log(myChildren.concat("Hridoy")); // output : ['Abdullah', 'Abdur Rahman', 'Imran', 'Khiyam', 'Himu', 'Tayba', 'Hridoy']
console.log(myChildren.concat(herChild)); // output: ['Abdullah', 'Abdur Rahman', 'Imran', 'Khiyam', 'Himu', 'Tayba', 'Jaber', 'Rashed', 'Rabeya']

// sort methods  > alphabetically sorted hoye geche.
let sortElements = ["Jakaria", "Imran", "Arafat", "Srabon"];
let sorted = sortElements.sort();
//let reverseSorted = sortElements.reverse();
console.log(sorted); // alphabetically sorted
//console.log(reverseSorted); // reverse sorted > desending sorted.

// sorted numbers > number sorted eivabe korte hoy, ekta function call korte hoy r ki.
let points = [100, 44, 55, 2, 54,6, 7];
let numbersSorted = points.sort(function (a, b) {
  return a - b;
});
  console.log(numbersSorted); // output :  [2, 6, 7, 44, 54, 55, 100]
  //console.log(points); // output :  [2, 6, 7, 44, 54, 55, 100]

   // desending styles sorted here 
  let point = [1, 3, 4, 5, 6, 7, 66, 77];
  let pointSort = point.sort(function (a, b){
    return b - a;
  });
  console.log(point); // output : [77, 66, 7, 6, 5, 4, 3, 1]

  // Math.random(); > protibar random number generator korbe.
  let randoms = [3, 4, 5, 6, 7, 8, 9];
  let randomsMath = randoms.sort(function (a, b){
    return 0.5 - Math.random();
  });
  console.log(randoms); // output : random numbers show after per refreash click.

  // Math.max.apply(null, array) othoba Math.max(array)
  let mxNum = [4, 65, 6,7, 78,88];
  let maxed = Math.max.apply(null, mxNum); // output 88
  console.log(maxed);

  // Math.min
  let minNum = [3, 5, 6, 666, 7,1];
  let mined = Math.min.apply(null, minNum);
  console.log(mined); // output : 1


  