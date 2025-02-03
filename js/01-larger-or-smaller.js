var number1 = parseInt(prompt("Enter the first integer:"));
var number2 = parseInt(prompt("Enter the second integer:"));

if (number1 === number2) {
    document.write("Both numbers are equal: " + number1);
} else {
    var largerNumber = (number1 > number2) ? number1 : number2;
    document.write("The larger number is: " + largerNumber);
}