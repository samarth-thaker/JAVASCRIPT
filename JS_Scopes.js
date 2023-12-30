//Global and local scopes {} scope:

let a = 10;
const b = 20;
var c = 30
console.log(a);
console.log(b);
console.log(c);
//The above will print a, b, and c: Great;
var c = 300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30
}
console.log(a);
console.log(b);
console.log(c);// ONLY THIS LINE WILL EXECUTE: 30 will be printed