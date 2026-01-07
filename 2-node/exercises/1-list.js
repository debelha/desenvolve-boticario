//1- Create a function called welcomeMessage that takes no parameters and prints "welcome to the course" in the console call this function.
const welcomeMessage = () => {
    console.log("Welcome to the curse!");
}

welcomeMessage();


//2 create a function called calculateArea that takes two parameters width and height it should calculate the area width times height and return the result
//Store the result in a variable and print it in the console.
const calculateArea = (width, height) => {
    return width * height;
};

const result = calculateArea(10, 20);
console.log(result);


// 3- Create a function convertToCelsius that receives a temperature in Fahrenheit and returns the equivalent value in Celsius using the formula: 
// (F−32)∗5/9. Test with some values.
const convertToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(convertToCelsius(30));
console.log(convertToCelsius(60));
console.log(convertToCelsius(90));
