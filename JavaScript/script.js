// let n=4;
// let m =5;
// console.log("hello world");
// console.log(n);
// console.log(m);

// Arithmatic operators...
/* let a = 4;
let b = 6;
console.log(a-b)
console.log(a+b);
console.log(a/b);
console.log(a%b);
console.log(a ** b);
console.log(++a);
console.log(--b);
console.log("a =",a ,"b =",b);
*/

// Assignment operator... 
/*
let a = 7;
let b = 5;
a += b;
console.log( "a = " , a%=b);
console.log("a = " ,a -= b);
console.log("a = " ,a *= b);
console.log("a = " ,a /= b);
*/

// Comparison operator...

/* let a=8;
let b="8";
console.log("a==b", a==b);
console.log("a!=b ",a!=b );
console.log("a===b", a===b); */

// Logical Operator... 

/*
1. && -> logical and
2. || -> logical or
3. !  -> logical not
*/

// console.log(!(3 > 1));
// console.log((5 + 3));

// Conditional Statement... 

/*
1. if,
2. if-else,
3. else-if,
*/


// Ternary Operator...

/* let age = 19;
let answer = age<= 18 ? console.log("NotAdult"): console.log("Adult");
*/
//console.log(answer)

// PRACTICE QUE 1--> take a number as a input and print if num is multiple of five then it is multiple else not multiple.
/* let num = prompt("Enter your number");
if (num % 5 === 0) {
    console.log(num, "this is multiple of five");
} else {
    console.log(num, "this is not multiple of five");
} */

/* PRACTICE QUE 2--> Write a code which can give grades to students according to their scores.
90-100,A
70-89,B
60-69,C
50-59,D
0-49,F */

let grade = 44;

switch (true) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 70:
        console.log("B");
        break;
    case grade >= 60:
        console.log("C");
        break;
    case grade >= 50:
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}





