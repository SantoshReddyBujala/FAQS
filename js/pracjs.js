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

// myFun3();
// var myfun = function myFun3(){
// x=10;
// console.log(x);
// var x;
// }

//Console Output> pracjs.js:2 Uncaught ReferenceError: myFun is not defined

/**
 * let, var and const
 */

//let
let balls =4;

function batingFun() {
    let balls =1;
    if(balls<5){
        let balls =3;
        console.log(`I have ${balls}'s`);
    }else {
        console.log(`I have lot of balls`);
    }
}
if(true){
    //let balls =15;
     balls =15;
}
console.log(balls);
batingFun();

// var

var vari =10;

function varFun() {
    var vari =2
    if(vari<8){
        var vari =4;
        console.log(`I have ${vari}'s`);
    }else {
        console.log(`Having more vari`);
    }
    console.log(vari);
}
if(true){
    var vari =16;
}
console.log(vari);
 varFun();

 // const

 const str='Santosh';
 const obj = {
     name:'Santosh'
 }
 console.log(obj.name)
 obj.name ="Manvith";
 console.log(obj.name)
 function strFun(){
     const str='Reddy';
     console.log(str)
 }

 //str ='Bujala';
 console.log(str)

 strFun();

 // Array Methods

const arr= [[1,2,3],[4,5,6]];
console.log(arr.flat(1)) //DEEP 1   

const arr1= [[1,2,3],[4,5,[3,[4],5,[45]],6]];

console.log(arr1.flat(Infinity)) // If do not know about deep

const newArr= [[1,2,3],[4,5,[3,[4],5,[45]],6]];

//Total of the array
const total = newArr.flat(Infinity).reduce((a,v)=> a+v,0);
console.log(total);


//

const nums =[1,2,3];
const strs=['one', 'two', 'three'];

const mapped = nums.flatMap((val, index)=>[val, strs[index]]); //flating and map

console.log(mapped);

const strings=['t','s','e','b'];

const valstr = strings.reduce((c,v)=> c+v);
console.log(valstr);

const valstrs = strings.reduceRight((c,v)=> c+v);
console.log(valstrs);

const narr =[0,1,2,3,5,6,7,8];

console.log(narr.copyWithin(0));
console.log(narr.copyWithin(1));
console.log(narr.copyWithin(4));
console.log(narr.copyWithin(0, 2, 5));


//this keyword

