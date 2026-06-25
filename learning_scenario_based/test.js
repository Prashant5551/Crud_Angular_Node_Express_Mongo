// const a = 5;
// const a;

// console.log(a);

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

fun();

const fn = (a, x, y, ...numbers) => {
    console.log(a,x, y, numbers)
}

fn(1, 2, 6, 8, 6, 7, 7, 4);

// function greeting(name){
//     alert('hello', + name);
// }

// function processUserInput(callback){
//     var name= prompt('Please enter your name' );
//     callback(name);
// }

// processUserInput(greeting);