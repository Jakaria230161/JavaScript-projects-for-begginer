// String search method
// 1. indexOf  > eta kintu prothom index number ta output dekhabe
let text4 = "I love you so much!";
let indexText = text4.indexOf("you"); // jodi se "you" ta khuje na paay taile -1 output dibe, abar eta kintu case sensitive
console.log(indexText);

// lastIndexOf > eta kintu last index number ta dibe, eikhane 2 ta you ache, tai last er you count korbe. indexOf kintu prothom tar index number dekhay r 2 tar belay e khuje na paile -1 dekhabe
let text5 = "I love you very much! do you love me?";
let indexText5 = text5.lastIndexOf("you");
console.log(indexText5);

// search methods > but search and indexOf is not same. because search return specified values of the position. and also search method can not take second position of arguments.but indexOf can not take powerful search (regular expression)
let text6 = "I love you!";
console.log(text6.search("love"));

// match methods > jeigula match krbe oita return korbe
let text7 = "I love you so much! do you love me?";
console.log(text7.match(/ve/));

// include method > jodi thake taile true return korbe r na thakle false return korbe > etao kintu case sensitive. ekta string ache kina ta easily ber korar jonne includes use korte hoy.
let text8 = "I love you so much!";
console.log(text8.includes("love")); // true return korbe bcz love is exits here 
console.log(text8.includes("loves")); // false return korbe bcz loves is not exits here.

// startWith  > this is also case sensitive.
let text9 = "I love you so much";
console.log(text9.startsWith("I")); // return true bcz I diye start hoiche 
console.log(text9.startsWith("i")); // return korbe false bcz eta case sensitive r i kintu nai.
console.log(text9.startsWith("I", 0)); // kotha theke start korbe tao bole deowa jay.

// endsWith > eta just last er string tai identified korbe
let text10 = "I love you so much!";
console.log(text10.endsWith("much!")); // end a ache tai true
console.log(text10.endsWith("so")); // end a nai tai false dekhabe
console.log(text10.endsWith("much")); // false bcz eta nai

// template literals
/* 
1,Easily Multiline lekha jay, jemne chao r ki
2, code error decrease kore,mane single quotes and double quotes niye jhamela.
3, Dynamic values deowa jay,jeikhane barbar concat or + korar dorkar hoy na.
4, you have to use $ sign , if you want to make dynamic string then you should use $ sign , rather than won't work.
*/
let text11 = `I love you
do you love me?
as like me?`;
console.log(text11);

// dynamic template literals
let text12 = `I love you so much!`;
let sentence = `${text12} and also loves my parents.`;
console.log(sentence);

// dynamic template
let text13 = "Bangladesh";
let text14 = "Pakistan";
let mixed = `I love ${text13} and ${text14}`;
console.log(mixed);

// dynamically name attached without using concat or plus sign.
let firstName = "Jakaria";
let lastName = "Mahmud";
let attachedName = `Full Name : ${firstName} ${lastName}`;
console.log(attachedName);
