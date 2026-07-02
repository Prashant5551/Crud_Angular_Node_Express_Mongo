// Closure is a function that is references variables in a outer scope from it's inner scope 

// const a = 5;
// const a;

// console.log(a);
var a = 7;

function abc() {
    console.log(a);
    var a = 5;
    // let b = 20;
    // const c = 30;
}

// abc();

var x = 4;

let y = 5;

var fun = function () {
    console.log(x);
    console.log(y);
    var x = 20;
    // let y = 50;
};

// fun();

const fn = (a, x, y, ...numbers) => {
    console.log(a, x, y, numbers)
}

// fn(1, 2, 6, 8, 6, 7, 7, 4);

// function greeting(name){
//     alert('hello', + name);
// }

// function processUserInput(callback){
//     var name= prompt('Please enter your name' );
//     callback(name);
// }

// processUserInput(greeting);

// let user = {
//     usrname: 'prashant',
//     rc1: () => {
//         console.log('subscribe', this.usrname);
//     },
//     rc2() {
//         console.log('subscribe', this.usrname);
//     }
// }

// user.rc1();
// user.rc2();

//closures

function makeFunc() {
    var name = 'prashant';
    function displayName() {
        console.log(name);
    }
    return displayName;
}
// var myFunc = makeFunc();
// myFunc();
// console.log(myFunc);

const hobbies = ['sports', 'cooking'];
hobbies.push('Reading'); //add last
hobbies.unshift('coding'); //add first
// const poppedValue = hobbies.pop(); //pop remove last
// hobbies.shift(); //remove first
// console.log(hobbies);

hobbies.splice(1, 0, 'reading1');
// console.log(hobbies)

hobbies.splice(1, 2); // remove from 1st index and 2 elements
// console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storeResults = testResults.slice(2,-2);  //slice() is used for copies an array
// testResults.push(5.91);
// const storeResults = testResults.concat([3.99]); // concat add value in new array
// console.log(storeResults, testResults);
// console.log(testResults.indexOf(1));

const personData = [{ name: 'pk' }, { name: 'mk' }];
// console.log(personData.indexOf({name: 'pk'}));

const mk = personData.find((i) => {
    return i.name === 'mk';
})

const fI = personData.findIndex((i) => {
    return i.name === 'bk';
})

// console.log(fI);

mk.name = 'bk';
// console.log(mk, personData);

for (var i = 0; i < 3; i++) {
    function inner(i) { //closure ex to print 0 1 2 without using var
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
    inner(i);
}

