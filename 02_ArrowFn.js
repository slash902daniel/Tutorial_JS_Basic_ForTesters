//Create less verbose code

//REGULAR FUNCTIONS
function product1(a, b){
    return a * b;
}
let result1 = product1(1,1);
console.log('function result1 is: ' + result1); 

//REGULAR BUT ASSIGNED DIRECTLY TO VARIABLE
let product2 = function (a, b){
    return a * b;
}
let result2 = product2(1,2);
console.log('function result2 is: ' + result2); 

//ARROW FUNCTION (REGULAR VERSION - With variables and more complex logic)
let product3 = (a, b) => {
    //More logic here
    return a * b;
}
let result3 = product3(1,3);
console.log('function result3 is: ' + result3); 

//ARROW FUNCTION (SIMPLIFIED VERSION1 - AS IS A SIMPLE RETURN)
let product4 = (a, b) => a * b;

let result4 = product4(1,4);
console.log('function result4 is: ' + result4); 

//ARROW FUNCTION (SIMPLIFIED VERSION2 - AS IS A SIMPLE RETURN and SINGLE PARAMETER)
let product5 = a => a * 5;

let result5 = product5(1);
console.log('function result5 is: ' + result5); 

//ARROW FUNCTION (SIMPLIFIED VERSION3 - AS IS A SIMPLE RETURN and SINGLE PARAMETER)
let product6 = () => 1 * 6;

let result6 = product6();
console.log('function result6 is: ' + result6); 

