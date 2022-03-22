// type = easy way to refer to the diff properties + functions that a value has

//Why do we care about types?
  // types are used by the ts compiler to analyze our code for errors
  // types allow other engineers to understand what values are flowing around our DB

// Easy way to refer to the diff properties + functions that a value has

// any value has a type in TS
//we can use 

// why do we care about types?
  // they give the ts compiler information to analyze our code for errors

const today = new Date();
today.getMonth();

const person = {
  age : 20
};


class Color {
}
const red = new Color();

// Type Annotations
  // code we add to tell TS what type of value a variable will refer to

// Type inference
  // ts tries to figure out what type of value a variable refers to