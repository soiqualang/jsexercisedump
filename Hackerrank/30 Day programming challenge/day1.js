var i = 4
var d = 4.0
var s = "HackerRank "
// Declare second integer, double, and String variables.
var int = parseInt(readLine(),10)
var doub = parseFloat(readLine(),10)
var str = readLine()

// Read and save an integer, double, and String to your variables.

// Print the sum of both integer variables on a new line.
console.log(int + i);   

// Print the sum of the double variables on a new line.
if(Number.isInteger(doub)){
    console.log((doub + d).toString() + '.0');
}
else{
    console.log(doub + d); 
}

// Concatenate and print the String variables on a new line
console.log(s + str)
// The 's' variable above should be printed first.