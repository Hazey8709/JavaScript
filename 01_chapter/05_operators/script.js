//* Arithmetic Operators

let x;

// x = 5 + 5; //s Addition 10
// x = 5 - 5; //s Subtraction 0
// x = 5 * 5; //s Multiplication 25
// x = 5 / 5; //s Division 1
// x = 5 % 5; //s Modulus (Remainder) 0

//* Concatenation
// x = "hello" + "world";
// x = "hello world";

//* Exponent (2 to the power of 3)
// x = 2 ** 3; // 8

//* Increment (Increase Value)
// x = 1;

// x = x + 1;
// x++;

//* Decrement (Decrease Value)
// x = 2;

// x = x - 1; // 1
// x--; // 1

//* Assignment Operators

// x = 10; // (= Assignment Op)
// x = x + 1;

// x += 10; //s Addition Assignment Operator,  2 + 10 = 12
// x -= 10;  //s Subtraction Assignment Operator,  2 - 10 = -8
// x *= 10;  //s Multiplication Assignment Operator,  2 x 10 = 20
// x /= 10;  //s Division Assignment Operator, 2 / 10 = .2
// x %= 10;  //s Remainder Assignment Operator, remainder of 2 & 10 = 2
// x **= 10; //s Exponentiation Assignment Operator,  2 to 10th power = 1024

//* Comparison operators
//s     == 	    equal to
//s     === 	equal value and equal type
//s     != 	    not equal
//s     !== 	not equal value or not equal type
//s     > 	    greater than
//s     < 	    less than
//s     >= 	    greater than or equal to
//s     <= 	    less than or equal to
//s     ? 	    ternary operator

//! (==) Equal to
// x = 2 == 2; //s True
// x = 2 == "2"; //s True

//! (===) Equal value & equal type
// x = 2 === 2;      //s True
// x = 2 === "2"; //s False

//! (!=) Not equal
// x = 2 != 2;         //s False
// x = 2 != "2";    //s False

//! (!==) Not equal Value OR Not equal type
// x = 2 !== 2;        //s False
// x = 2 !== "2";   //s True

//! (>) Greater than
// x = 10 > 5; //s True
// x = 5 > 10; //s False

//! (<) Less Than
// x = 1 < 5; //s True
// x = 5 < 1; //s False

//! (>=) Greater than or equal to
// x = 10 >= 10; //s True
// x = 10 >= 20; //s False

//! (<=) Less than or equal to
// x = 10 <= 10; //s True
// x = 10 <= 20; //s True

//! Ternary Operator
// let age = 15;
let age = 18;

let voteable = age < 18 ? "Can't vote" : "Vote";

const output = x;

// console.log(output);
console.log(voteable);
