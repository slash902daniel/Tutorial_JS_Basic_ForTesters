
//Sync code ===========================
function print(string) {
    console.log(string);
};

print('Start');
print('Printing something');
print('Finish');
console.log('SYNC ------------------------------')
console.log('');

//Async code ===========================
function printAsync(string) {
    setTimeout( () => {
        console.log(string)
    }, Math.floor(Math.random() * 100)) 
};

//printAsync('Start');
//printAsync('Printing something');
//printAsync('Finish');
console.log('ASYNC ------------------------------')
console.log('');

//CALLBACK VERSION =====================================
function printAsyncV1(string, callback) {
    setTimeout( () => {
        //console.log(string)
        callback();
    }, Math.floor(Math.random() * 100)) 
};

//So the funciton is passed as argument.. nested the call each time..
//This leads to the nested problems to mantain/read
printAsyncV1('V1 Start', () => {
    printAsyncV1('V1 Printing something', () => {
        printAsyncV1('V1 Finish', () => { })
    })
});

console.log('CALLBACK  ------------------------------')
console.log('');

//PROMISES VERSION =====================================
function printAsyncV2(string) {
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            //console.log(string);
            resolve();
        }, Math.floor(Math.random() * 100)) 
    })
};

printAsyncV2('V2 Start')
    .then(() => printAsyncV2('V2 printing something'))
    .then(() => printAsyncV2('V2 finish'))

console.log('PROMISES  ------------------------------');
console.log('');

//ASYNC AWAIT VERSION =====================================

//Same print function, what change is the call
function printAsyncV3(string) {
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            console.log(string);
            resolve();
        }, Math.floor(Math.random() * 100)) 
    })
};
async function printAll() {
    await printAsyncV3('V3 Start')
    await printAsyncV3('V3 Printing Something')
    await printAsyncV3('V3 Finish')
}

printAll();

console.log('ASYNC AWAIT  ------------------------------');
console.log('');