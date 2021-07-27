// Variable Hoisting
function myFun(){
    x=10;
    console.log(x);
    var x;
}
myFun();
//Console Output> 10

// Function Hoisting
callFun();
function callFun(){
    x=10;
    console.log(x);
    var x;
}
//Console Output> 10

// Variable Hoisting
function myFun2(){
    console.log(x);
    var x = 10;
}
myFun2();

//Console Output> undefined

myFun3();
var myfun = function myFun3(){
x=10;
console.log(x);
var x;
}
//Console Output> pracjs.js:2 Uncaught ReferenceError: myFun is not defined


