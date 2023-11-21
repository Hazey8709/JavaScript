let x;

// x = 5 + 5; //s Number = 10
// x = 5 + "5"; //s Turning Number into String  = 55 string
// x = 5 + Number("5"); //s

// x = 5 * "5"; //s turned string into a Number to *

x = 5 + null; //s = 5

// x = Number(null); //s 0
// x = Number(true); //s 1
// x = Number(false); //s 0

x = 5 + true; //s 5 + 1 = 6
x = 5 + false; //s 5 + 0 = 5

console.log(x, typeof x);
