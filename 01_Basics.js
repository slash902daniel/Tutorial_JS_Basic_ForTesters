console.log('inside js: ');

//https://www.youtube.com/watch?v=uodOTTeoJ4M&list=PLzDWIPKHyNmLxpL8iQWZXwl_ln0BgckLt&index=4
//INSTRUCTIONS=============================
//install node: Download from webpage or npm
//Install IDE
//COMPILE / RUN=============================
//To run a file --> node 01_Basics.js
//==========================================

//1)Variables -------------------------
let name = 'Jhon';
name = 'Kate';
console.log('name is: ' + name);    

let age = 18;
console.log('age is: ' + age); 

let ageMoreThan18 = true;
console.log('ageMoreThan18 is: ' + ageMoreThan18);

//2) CONSTANTS ------------------------
const name2 = 'Jhon';
//name2 = 'Kate';
console.log('name is: ' + name2);  

//3)CONDITIONAL OPERATORS ---------------

//IF
if(age > 18){
    ageMoreThan18 = true; 
} else if (age = 18){
    ageMoreThan18 = false;
} else{
    ageMoreThan18 = false; 
}
console.log('ageMoreThan18 is: ' + ageMoreThan18);  

//Ternary
let ageMoreThan18v2 = (age > 18) ? true : false;
console.log('ageMoreThan18v2 is: ' + ageMoreThan18v2); 

//LOOPS ------------------------------

let i = 0;

while (i<5){
    console.log('i is: ' + i); 
    i++;
}

for (let index = 0; index<5; index++) {
    //const element = array[index];
    console.log('index is: ' + index); 
}

//FUNCTIONS
function product(a, b){
    return a * b;
}

let result = product(4,3);

console.log('function result is: ' + result); 


function productb(a, b){
    let res = a * b;
}
//console.log('function result is: ' + res); 
//ERROR OF VARIABLE


