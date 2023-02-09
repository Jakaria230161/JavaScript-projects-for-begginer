// Precision > Integer number 15 ta porjonto js bujhte pare correctly > Decimal number 17 ta porjonto js bujhte pare correctly.

// integer > highest 15 digits
let l = 8888888888888888; // here js can understand
let tt = 888888888888888888; // vul answer dibe bcz 15 er por bujhe na.
console.log(l);
console.log(tt);

// decimal > highest 17 digits > tobe eta jana uchit je, 2ta floating number jog korle always 100% accurate results dibe na
let deci = 0.3;
let decci = 0.1;
// let add = 0.2 + 0.1; // eikhane js confused tai right results dibe na
// to solve above problem
let add = (0.2 * 10 + 0.1 * 10) / 10; // ekhon r confused hobe na, right result dibe bcz age amra integer a convert kore niyechi.
//let add = 0.3 + 0.1; // eikhane js right results dibe
console.log(add);

/* 
1, + sign diye add number and add string concatenating kora jay, r ei jonne plus sign diye korle string priority pay.
2, but * and / er khetre kintu vinno tokhon numeric number a convert kore ney. tokhon r string priority pabe na.tobe number hoilei kintu divide or multiplication korte parbe. r jodi emon hoy je ekta string arekt number taile NaN asbe bcz se etareo divide / multiplication korar try korbe.
*/

// NaN > Not a number > number is not legal numbers
let num1 = 100;
let num2 = "Apple";
console.log(num1+num2); // eikhane string priority pabe. bcz + sign kora hoyeche
console.log(num1/num2); // return korbe NaN 

// isNaN > er sathe kichu jog korle NaN e output asbe > etar khetre number priority pabe , isNaN kintu nijei ekta number.

// infinity > ekta number jar results infinity asbe
let infi = 2 / 0;
console.log(infi); // output is infinity.

// toString > number tare string a convert kore r ki.
let text15 = 123;
let newText = text15.toString();
console.log(typeof newText); // return string
console.log(newText);

// toExponential
let text16 = 9.234;
console.log(text16.toExponential(2)); // 2 mane doshomik er por 2 ghor rakhbe r na dile jemon ta temon e rakhbe. output is = 9.23e+0

// toFixed > money er bapar hoile eta perfectly kaj kore > etao string return kore > according to decimal values return korbe. > eta hocche decimal er por koto ghor eta return korbe.
let text17 = 12.235;
console.log(text17.toFixed(0)); // output 12
console.log(text17.toFixed(1)); // output 12.2
console.log(text17.toFixed(2)); // output 12.23

// toPrecision > eta length onujayi returns korbe, joto number dibo toto ghor return korbe > return korbe string.
let text18 = 2.245;
console.log(text18.toPrecision()); // output 2.245
console.log(text18.toPrecision(1)); // output 2
console.log(typeof text18.toPrecision(2)); // output 2.2

// Number > return number > direct number a convert kre fele> float hok r ja hok se number  a convert korbe , r jodi space deowa hoy majhe taile NaN return korbe
let num5 = true;
console.log(Number(num5)); // output 1

// parseInt > space are allowed > just integer number return kore
let num6 = 12.66;
console.log(parseInt(num6)); // output 12

// parseFloat > space are allowed tai 1st number ta return korbe > jemon number dibe temon e return korbe tai age text(string dile) + number dile NaN return korbe
let num7 = 12.12;
console.log(parseFloat(num7)); // output 12.12