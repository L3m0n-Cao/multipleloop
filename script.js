let number = prompt("What Multiplication do you want?", "3"); //Prompt what multiplication
let multiples = prompt("Thanks. How many Multiples do you want?", "20"); //prompt how many times

var fix = (multiples*multiples/multiples+1) //does some trickery to change varible to a proper number, and add 1. 

for (var i = 1; i < fix; i++) { //loop
  var logging = (number*i) //multiplying 
  console.log(logging); //console logging
  document.write(logging + ", ") //write text and adds ", " to the end of every number.
}
