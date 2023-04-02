/* 
Regular expression: 
-------------------
1, Regular expression for search pattern.
2, search pattern for text search or replace text operations.
3, Regular expression syntax = /pattern/modifiers;
4, Example = /w3school/i; here i means > case insensitive
5, Using string methods in Regular expression > 
5.1, search (); > uses for regular expression matching and returning the position of the match r khuje na paile -1 dibe
5.2, replace (); > uses for regular expression replacement
6, i = case insensitive > jeta first matching ta return korbe
    g = global match > joto match pabe sob replace or korbe/match kore position show korbe
    m = multiline match                                      
*/
// regular expressions with string
let regText = 'Visit my Website';
let searchRegText = regText.search('Website');
console.log('without regular expression : ' + searchRegText);

// using string search methods with regular expressions
let regTxt = 'Visit my website';
let searchTxt = regTxt.search(/Website/i); // here i is case insensitive
console.log('with regular expression : ' + searchTxt);

// replace methods with a string
let repText = 'I love Bangladesh';
let replacedTxt = repText.replace('Bangladesh', 'Saudi arabia');
console.log('without regular expression : ' + replacedTxt);

// replace methods with regular expression
let repTxt = 'I love bangladesh';
let replacedText = repTxt.replace(/Bangladesh/i, 'Saudi Arabia');
console.log('with regular expression: ' + replacedText);

// global search with match methods
let gloTxt = 'I love Bangladesh';
let globalSearch = gloTxt.match(/[e]/g); // match return kore > jotto gula match kore condition er sathe and matching gula niya ekta array return kore r search just index position ta dey r replace toh replace kre fele
console.log(globalSearch);
console.log('with regular expression with match methods : ' + globalSearch);

// with number string
let regNum = "1,3,4,5,6,7,8,9";
let regesNum = regNum.match(/[1-6]/g);
console.log(regesNum);
console.log('with regular expression with match methods to find matching numbers : ' + regesNum);

// test() on pattern
const pattern = /e/;
const patterned = pattern.test("I love Bangladesh"); // jodi khuje pay taile true dibe r noile false dibe
console.log(patterned);

// exec methods
const patternExec = /e/;
const patternedExec = patternExec.exec('I love my country which name is Bangladesh');
console.log(patternedExec);