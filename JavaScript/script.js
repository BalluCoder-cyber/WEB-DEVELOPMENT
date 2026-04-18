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

/* let grade = prompt("enter your marks");

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
} */

/*
// LOOPS IN JAVA SCRIPT...

//for loop;
  for(let i = 0; i<4; i++){
    console.log("this is our first loo ");
  }    
  
// while and do while loop;
  let x =1;
  while(x < 10){
    console.log("I am while");
    x++;
  }

// forOf loop ;
  let element = "ballucoder";
  let size = 0;
  for (let i of element) {
    console.log("i =", i);
    size++;   
  }
  console.log("size of string=", size);



//forIn loop;
  let student={
    name: "ballu",
    section:"A",
    rollNumber:"0613CS241044",
    cource : "Engineering",
    cgpa: 8.5,
  }
  for (let key in student) {
    console.log("key=",key, "values=",student[key]);
    
  }
    */


// PRACTICE QUE.3-->MAKE A GAME TO GUESS THE NUMBER.

/*
 let number=prompt("Enter the number...");
 let value= number;
 let digit= prompt("Guess the numbe...r");

 while(value != digit ){
   digit=prompt("you guess the wrong number...");
   if(digit > value){
       console.log("number is bigger...");
   }else{
       console.log("number is lesser...");
   }
 }
 console.log("hip hip hurray!! you find the number... ");
 */

// Strings IN JAVA SCRIPTS(immutable)..
/*
let s = "hy this side balwant"; // it have many method like slice, trim, length,charAt(index), touppercase, toLowercase, replace;
console.log(s.slice(6));
console.log(s.length);  // strings 
console.log(s[19]);


let obj = {             // creting obj
    name: "balwant",
    education: "software engineering",
}

console.log("name of obj=", obj.name, "education=", obj.education); // normal method to print...

let output = `The name of obj ${obj.name} and  he is pursing ${obj.education}`; // stirng template..
//let newOutput = output.toUpperCase();
console.log(output.toUpperCase());

let s1 = "first part";
let s2 = "second part"; // add two string...
console.log(s1.concat(s2));
console.log(s2.replace("s", "t"));
console.log(s1.charAt(7));

//PRACTICE QUE.4--> PROMPT THE USER TO ENTER THEIR FULL NAME. GENERATE A USERNAME FOR THEM BASED ON THE INPUT START USERNAME WITH @ FOLLOWED BY THEIR NAEM AND ENDING WITH THE LENGTH OF NAME.
let user = prompt("Enter your full name");
let userName = `@${user}${user.length}`;
console.log(userName);
*/


// Arrays in javaScript(mutable)...
/*
let mark = [55, 33,44,66,77,99];
console.log(mark);
console.log(mark[3]);


let movie = ["dhurandhar", "raoShaab", "sonOfSardar", "tuMeraHero","Doomsday","Avengers"];
for(let i of movie){  // forOf loop
    console.log(i);
}

//PRACTICE QUE.5--> FOR A GIVEN ARRAY WITH PRICE OF 5 ITEMS ALL ITEMS HAVE AN OFFER OF 10% OFF ON THEM. CHANGE THE ARRAYS TO STORE FIANAL PRICE AFTER APPLYING OFFER.
let items = [250,645,300,900,50];
console.log("before discount=", items);
for(let i =0; i<items.length; i++){
    let discount = items[i]/10;    items[i] -= discount; 
}
console.log("after 10% discount = ", items);  


let food=["paneer","pizza","chat","momos","fries"];
console.log(food);
food.push("chowmein","dosa","idli");
console.log(food);
food.pop();
console.log(food);
console.log(food.toString());

let vegetable = ["spinch","tomato","potato"];
let join= vegetable.concat(food);
console.log(join);
console.log( "deleted =", join.shift());
console.log(join);
console.log("add = ",join.unshift('gazar'));
console.log(join);
console.log(join.slice(4,7));
console.log(join.splice(7,9,"muli", "bhindi"));
console.log(join);
*/

/*
// FUNCTION IN JS...
function sum(a, b) {
  console.log(a + b);
}
sum(4, 5);

function multi(c, d) {
  let m = c * d;
  return m;
}
let multiply = multi(8, 8);
console.log(multiply)

const functionArrow = (g, h) => {

  return g * h;
};
console.log(functionArrow(555555555, 66));

//PRACTICE QUE.6-->CREATE A FUNCTION USING "FUNCTION"KEYWORD THAT TAKS A STRING AS AN ARGUMENTS AND RETURNS NUMBER OF VOWELS IN STRIGN.
function vowelsCount(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s.charAt(i) === "e" || s[i] === "i" || s[i] === "o" || s[i] === "a" || s[i] === "u") {
      count++;
    }
  }
  let val = console.log("vowel in string are = ", count);
  return val;
}
vowelsCount("sullullululuuuooo");

let arr = [44, 55, 66, 77, 22];
arr.forEach((num) => {
  console.log(num)
})

let verr = ["nmuber", "baby", "so cute", "gadhe ka bacha"];
verr.forEach((num, i, verr) => {
  console.log(num.toUpperCase(), i, verr);
})

let numarr = [2, 4, 5, 6, 7];
numarr.forEach((n) => {
  console.log(n ** 3);
})

let m = [8, 4, 9, 2, 1];
let marr = m.map((digit) => {
  return digit * 2;
})
console.log(marr);

let v = m.filter((even) => {
  return even % 2 == 0;
})
console.log(v);

let r = m.reduce((pre, curr) => {
  return pre + curr;
});
console.log(r);

//PRACTICE QUE.7--> TAKE A NUMBER N AS INPUT FROM USER. CREATE AN ARRAY OF NUMBER FROM 1 TO N. USE TEH REDUCE METHOD TO CALCULATE SUM OF ALL NUMBER IN THE ARRAY. USE THE REDUCE METHOD TO CALCUALATE PRODUCT OA ALL NUMBER IN THE ARRAY.
let n = prompt("enter any number in between 1-50");
let arrq = [];
for(let i = 0; i<n; i++){
  arrq[i]= i+1;
}
 console.log("array = ", arrq);

let q = arrq.reduce((pre,curr)=>{
  return pre + curr;
});
console.log("sum of arrq = ",q);

let p = arrq.reduce((product,curr)=>{
  return product * curr;
});
console.log("product of arrq = ",p);
*/