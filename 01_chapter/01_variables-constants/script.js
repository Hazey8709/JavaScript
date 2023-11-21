let firstName = "Joe";
let lastName = "Doe";

console.log(firstName, lastName);

// -----------------------------------
console.log("---------  Break  -------------");

//* Reassigning Variables

firstName = "todd";

console.log(firstName);
// -----------------------------------
console.log("---------  Break  -------------");

//*  Const

const score = 100;

console.log(score);

// -----------------------------
console.log("---------  Break  -------------");

// score = 111;

console.log(score);
// -----------------------------
console.log("---------  Break  -------------");

//* Const with array.
const arr = [1, 2, 3, 4];

console.log(arr);
// ------------------------------

//* can't change arr but can add an item to array

// arr = [1, 2, 3];
console.log(arr);

// ---------------------------------
console.log("---------  Break  -------------");
arr.push(6);

console.log(arr);
// ------------------------------------
console.log("---------  Break  -------------");

//* Const with an object.

const person = {
    name: "Bow",
};

//s Don't work (can't change object)
// person = girl;

//s works (but can change a value in an object)
person.name = "changed";

console.log(person);
// console.log(person.name);

// person.email = "noobiej@google";

console.log(person);

console.log("---------  Break  -------------");

let a, b, c;

const d = 10,
    e = 2,
    w = 5;

console.log(a, b, c, d, e, w);

//
//
//!   ----------------       NOTES   ------------------------\//* Naming Conventions  (common-practice)
//s Letter, Numbers, underscore & $
//s can't start with a number

//* Camel Case
//s firstName

//* Underscore
//s first_name

//* Pascal Case
//s FirstName

//* Ways to declare a variable
//s let, const,  (var)
