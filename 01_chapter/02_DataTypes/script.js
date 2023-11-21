//! String (Type-Of)

const firstName = "sara";

//* Number
const age = 20;
const temp = 23.6;

//* Boolean
const hasKids = true;

//* Null
const aptNum = null;

//* Undefined
// let score;
const score = undefined;

//* Symbol
const id = Symbol("id");

//* BigInt
const n = 1342649626n;

//! Reference Types

const numbers = [2, 4, 7, 4, 2, 8, 9, 3];

const person = {
    name: "Joe Bad",
    nicName: "smoe",
};

function sayHi() {
    console.log("HI");
}

// const output = firstName;
// const output = age;
// const output = temp;
// const output = hasKids;
// const output = aptNum;
// const output = score;
// const output = id;
// const output = n;
// const output = numbers;
// const output = person;
// const output = sayHi;

// console.log(output, typeof output);
//* All Variables

console.log(
    firstName,
    age,
    temp,
    hasKids,
    aptNum,
    score,
    id,
    n,
    numbers,
    person
);
console.log("---------------------------");

//
//
//! -------------------------     NOTES     ------------------------------------------
//! Primitive Data Types:

//s String: Sequence of charters. Must be in quotes or backticks.
//s Number: Integers as well as floating-point numbers.
//s Boolean: Logical entity / true OR False.
//s Null: Intentional absence of any object value.
//s Undefined: A Variable that has not yet been defined / assigned.
//s Symbol: Built-In object whose constructor returns a unique symbol.
//s BigInt: Numbers that are greater that the "Number" type can handle.

//! Reference Types: (Objects)

//s Reference types OR "objects" are a non-primitive value and when assigned to a variable, the variable is given a reference to that value.

//s Objects literals, arrays & functions are all reference types.

//! Static Typing VS Dynamic Types:

//s  JavaScript is a dynamically-typed language: This means, we do not explicity define the types for our variables, many other languages are statically-typed such as C, C++, Java.

//s Type script: is a superset of JavaScript, which allows static-typing. This can make your code more verbose & less prone to errors. TypeScript may be something you might want to look into further down the road.
