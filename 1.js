// 1. З масива objects вивести об'єкт в якому буде мін, макс і середнє арифметичне мін макс

const objects = [
    {age: 10}, 
    {age: 1}, 
    {age: 32}, 
    {age: 14}, 
    {age: 54}, 
    {age: 1},
];

const minNumber = [...objects].sort((min, max) => min.age - max.age)[0].age; 
const maxNumber = [...objects].sort((min, max) => max.age - min.age)[0].age;
const minMaxAverageNumbers = (minNumber + maxNumber)/2;
console.log(minNumber);
console.log(maxNumber);
console.log(minMaxAverageNumbers);

