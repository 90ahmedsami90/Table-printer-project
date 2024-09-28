// Prompt user for input
var userInput = prompt("Enter a number to print its multiplication table:");

// Check if the input is valid and convert to an integer
if (userInput ) {
    var number = parseInt(userInput, 10);
    
    console.log("Multiplication Table for " + number + ":");
    
    // Loop to print the multiplication table
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
} else {
    console.log("Please enter a valid number.");
}
