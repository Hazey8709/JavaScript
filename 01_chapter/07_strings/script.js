let x;

const name = "joe";
const age = 40;

//s first way (Concatenation with " ")
// x = "Hello my name is" + " " + name + " " + "& I am" + " " + age;

//s Second way (Concatenation)
// x = "Hello my name is " + name + " " + "& I am " + age;

//s Third way  (template literals)
// x = `Hello my name is ${name} & I am ${age}`;

//! String Properties & Methods
// const s = "helloWorld"; // with out space 10
const s = "hello World"; // with space 11, counts spaces!

// x = s.length;
// x = s[0]; // access by key OR can use .charAt()

// x = s.toUpperCase();
// x = s.toLowerCase();

// x = s.charAt(0);

// x = s.indexOf("h");
//s when more than one character it will give first letter found
// x = s.indexOf("e");

// x = s.substring(0, 3); // = hel
// x = s.substring(4, 8); // = o Wo
// x = s.substring(0, 5); // = hello
// x = s.substring(7); // = orld

// x = s.slice(-11); // = hello World
// x = s.slice(-6); // = hello

// x = s.trim(); //s trim whitespace

// x = s.replace("World", "Worlds");

// x = s.includes( "World" ); //s true
// x = s.includes("world");   //s false

// x = s.valueOf();

// x = s.split("");
// x = s.split(" ");

//! Log Out (Console)
let output = x;

console.log(x);

//! Challenge
// const string_1 = "This is string one.";
// const string_2 = "This is string two.";
// const string_3 = "This is string three.";

// //s Capitalize string_1.
// //s string_2 to all lower case.
// //s In string_3 find what the index of "5" is.
// //s Use template literals to combine strings.

// console.log(string_1);
// console.log(string_2);
// console.log(string_3);

//! Methods Used
// .length
// .toUpperCase()
// .toLowerCase()
// .indexOf()
// .substring()
// .slice()
// .trim()
// .replace()
// .includes()
// .valueOf()
// .split()
