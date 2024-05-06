// arithmetic operators-------------------------------------------------------------

var a = 10;
var b = 20;
c = a + b;
document.getElementById("Demo").innerHTML = c;

var a = 25;
var b = 25;
c = a - b;
document.getElementById("demo1").innerHTML = c;

var a = 22;
var b = 10;
c = a * b;
document.getElementById("demo2").innerHTML = c;

var a = 25;
var b = 5;
c = a / b;
document.getElementById("demo3").innerHTML = c;

var a = 100;
var b = 10;
c = a % b;
document.getElementById("demo4").innerHTML = c; //modulo operator

var a = 10;
var b = 20;
c = a ** b;
document.getElementById("demo5").innerHTML = c; //exponential operator

//Relational operators or comparison operators

let p = 55;
let q = "55";
r = p == q; // == compares the two values whereas
// === compares the two values and datatypes
s = p === q;
// returns output true or false
t = p != q; //not equal
u = p !== q; //not equal value or not equal type

document.write(r);
document.write(s);
document.write(t);
document.write(u);

// Bitwise Operator----//Returns a one in each bit position for which the corresponding bits of both operands are ones.

var a = 50;
var b = 20;
c = a & b;
d = a | b;
e = a ^ b;
f = ~a;
g = a << b;
h = a >> b;
i = a >>> b;

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

// Logical operators----------------------------------------------

const val1 = 10;
const val2 = 20;
value = val1 == 10 && val2 == 10;
valuee = val1 == 10 || val2 == 10;
valuex = !val2 == 20;

console.log(value);
console.log(valuee);
console.log(valuex);

// Assignment operator--------------------------------------------

var assign1 = 5;
var assign2 = 4;
assignment = assign1 ** assign2;
assign1 **= assign2;
assignment1 = assign1 %= assign2;
assignment2 = assign1 /= assign2;
assignment3 = assign1 *= assign2;
assignment4 = assign1 -= assign2;

console.log(assignment);
console.log((assign1 **= assign2));
console.log(assignment1);
console.log(assignment2);
console.log(assignment3);
console.log(assignment4);

// Special operators-----------------------------------------------

console.log(typeof "John");
console.log(typeof 3);
console.log(typeof null);

const person = {
  age: 45,
  ID: 101,
};

delete person.age;

console.log(person);

// Prompt //------------------------------------------------------------------------------

let employee = prompt("Please Enter your name", "Akshay");

if (person == "Akshay") {
  document.write("Hello, How are you?");
}

// alert // -------------------------------------------------------------------------------

alert("This will open a Webpage!");

// document.getElementById("Button").innerHTML = (alert("Welcome"));
