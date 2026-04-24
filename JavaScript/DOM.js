console.log("hello world");

//this give us a all childnode
let value = document.body.childNodes;
console.log(value);

// this give us a element of html
let val = document.body.firstElementChild.children;
console.log(val);

// this give us specific index element
let val1 = document.body.firstElementChild.children[2].nextElementSibling;
console.log(val1);

// same as above
let val2 = document.body.firstElementChild.children[2].previousElementSibling;
console.log(val2);

//set backC of specific element
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "red";

//selecting and set color by id
let box1 = document.getElementById("id")
b.style.backgroundColor="yellow"

// selecting all and set color by class 
let q = document.querySelectorAll(".box");
q.forEach(e => {
    e.style.backgroundColor = "black";
    
});