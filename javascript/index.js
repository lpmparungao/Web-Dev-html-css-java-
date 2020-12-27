//comments

//Data Types
//undefined, null, boolean, string, symbol, number, and object
//undefined, variable that hasn't been set yet
//null, empty/nothing
//symbol is emutable primitive value that is unique

//Variables
//Case sensitive

var a;
a = 25
let b = 7;
const c = 2;
console.log(a)
console.log(b)
console.log(c)
console.log()

//Operations + - * / %

let d, e, sum, diff;
d = 15;
e = 13;
sum = d + e;
diff = d - e;
console.log(sum)
console.log(diff)
console.log()

//Increment Decrement
let f = 10;
f++;
console.log(f)
console.log()

//Updating values
let g = 10;
let h = 15;

g += 12; // g = g + 12
h -= 13; // h = h - 13
// *= and /= for multiplication and division
console.log(g)
console.log(h)
console.log()

//Escape character
/* 
    \' single quote
    \" double quote
    \\ backslash
    \n new line
    \r carriage return
    \tab
    \b backspace
    \f form feed
*/
let i = "abc\"d\"efgh"
let j = '"Time is gold"'

console.log(i)
console.log(j)
console.log()

//Concatenating strings
let k = "sentence one. "
let l = "sentence three. "
let m = "I come first. "
m += "I come second."

console.log(k + "sentence two. ")
console.log(k + l)
console.log(m)
console.log()

//String Functions

let n = "abcde"
console.log(n.length)
console.log(n[0])
console.log(n[n.length - 1])