/* let apples = 5;
let speed: string = "fast";
// if declaration and initialization are on same line,  ts  will figure out thetype
  // of 'color' for us
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];


// Classes
class Car {

}
// let car: Car = new Car();

// Object literal
let point: {x: number; y: number; } = {
  x: 10,
  y: 20
};

// Function

//Type annotations for functions
  // Code we add to tell TS what type of arguments a function will receive and what type of values it will return
//Type inference for functions
  // same applies for functions, but only works around return value of function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates); // { x:10, y: 20};

// 2) When we declare a variable on one line
// and initialize it after
/* let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean  = false;

for (let i=0; i <words.length; i++);
  if (words[i] === 'green') {
    foundWord = true;
  } 

// 3) Var whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false

for (let i=0; i<numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

 */