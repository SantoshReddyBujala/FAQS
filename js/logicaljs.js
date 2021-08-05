// String reverse without reverse function
function strReverese(strArg){
 var output = '';
 for(var i=strArg.length-1;i>=0;i--) {
     output +=strArg[i];
 }
 return output;
}
var test="Santosh Reddy Bujala";
console.log(strReverese(test));

// Displaying Array values with 1 second delay
var array= [1, 2, 3, 4, 5]
for (let i=0; i<array.length; i++) {
    task(i);
 }
   
 function task(i) {
   setTimeout(function() {
       console.log(i);
   }, 1000*i);
 }

 //Curring function JavaScript
 var mul= a => b => c=> a*b*c;
 var results = mul(2)(3)(4);
console.log(`Curring Function ${results}`);

// Delete a object element
(function(x){
    delete x.name;
    console.log(x);
    return x;
}({name:'San'})) //{}

// Deleting Object 
function delObj(x){
    delete x;
    return x;
}
console.log(`Deleting Object ${JSON.stringify(delObj({name:'San'}))}`);

// Delete value 
function delVal(x){
    delete x;
    return x;
}
console.log(`Deleting value ${delVal(1)}`);

//Deleting String
function delStr(x){
    delete x;
    return x;
}
console.log(`Deleting String ${delVal('a')}`);


