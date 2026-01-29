let fruits = ['apple', 'banana', 'orange', 'kiwi', 'lemon'];

//SIMPLE FOR
for (let i = 0; i <= (fruits.length - 1); i++) {
    console.log(fruits[i]);
}

//FOR OFF
for (let fruit of fruits) {
    console.log(fruit);
}


//MAP
const doubleAge = (value) => value * 2;

let ages = [10, 20, 34, 55, 25, 18, 12];
let doubleAges = ages.map(doubleAge); 
console.log(ages);
console.log(doubleAges);

//FILTER
function major(value1) {
    return value1 > 18;
}

let ages1 = [10, 20, 34, 55, 25, 18, 12];
let ageMajor = ages1.filter(major); 
console.log(ages1);
console.log(ageMajor);
