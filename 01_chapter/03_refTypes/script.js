//!   ----------------      NOTES     -------------------------------

//* KeyNote (JS-Stack-Heap.key)

//* Values are stored on the stack
const name = "John";
const age = 40;

//* reference values stored on the heap

const person = {
    name: "brad",
    age: 40,
};

let newname = name;
newName = "smoe";

let newPerson = person;
newPerson.name = "Bradley";

console.log(name, newName);
console.log(person, newPerson);
