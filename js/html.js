/**
 * Local Storage example
 */

//Set the value in a local storage object
localStorage.setItem('familyName', "Bujala");

//Get the value from storage object
var familyName= localStorage.getItem('familyName');
// Display local storag value
console.log(familyName);
//Delete the value from local storage object
var rmfName =localStorage.removeItem('familyName');//Delete specifice obeject from local storege
console.log('After Remove', rmfName);
localStorage.clear();//Delete all from local storege

/**
 * Session Storage example
 */

//Set the value in a Session Storage object
sessionStorage.setItem('name', 'Santosh');
//Get the value from storage object
var data = sessionStorage.getItem('name');
console.log(data);

