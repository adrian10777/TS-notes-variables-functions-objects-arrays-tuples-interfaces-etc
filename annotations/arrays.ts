/* // Typed Arrays
  // Arrays where each element is some consistent type of value

const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Benefits of using arrays ts

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//TS can prevent us from adding imcompatible values to the array
// carMakers.push(100);

// anytime we declare array we get a lot of help with built in methods like
  // map, foreach, reduce functions

  // Help with ' map '
  carMakers.map((car: string): string => {
    return car.toUpperCase();
  });

  // we can contain diff elements in arr
const importantDates: (Date | string) [] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push (100); doesnt work

// we will use arrays in TS anytime we need to represent a collection of records with some ar itrary sort order */