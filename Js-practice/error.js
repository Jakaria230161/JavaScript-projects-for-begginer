/* 
Error handling is very important
---------------
try{
  regular code here...
} catch(err) {
  here handling the error
  console.log(err);
}

/ Error types
----------------
1, Syntax error > jeikhane double quote na dile, othoba ekta single quote abar arekta double quote dile, ei type er error r ki
2, Reference error > jodi variable declaration na kora hoy
3, type error > 2 ke apni toLowerCase a convert korte chacchen ja type error dibe
4, URI error > unicode error > mane apni jodi illegal unicode use koren then uri error dibe
5, Eval error > new version a support kore na tai etake syntax error hisebe dey.
6, Range error > jodi range er baire jey > toPrecision (699) > etay range error dibe
*/
try{
  adddlert ('welcome to here');
} catch(err) {
  console.log('Error message : ' + err.message);
}

// Error handling exploring with the function
const errorHandling = (x) => {
  try { // eikhane e shudhu error ta dhora thakbe
    if(x == '') throw "empty";
    if(isNaN(x)) throw { // you can create custom error , as you can as only message or to set as object 
      message : "Invalid Number",
      name : "Not a number Error"
    };
    x = Number(x);
    if(x > 10) throw "too high";
    if(x < 5) throw "too low";
  }
  catch(err) {
    console.log(err); // kono error paile se error or error message dekhabe r error ta eikhane handle krbe
  } 
  finally { // error ta catch hok ba na hok or error create hok ba na hok finally block a ja thakbe tai print korbe
    console.log("finally i am done with error handling or not!!")
  }
}
errorHandling("23");