let number = prompt("What Multiplication do you want?", "3"); //Prompt what multiplication, default is 3.
let multiples = prompt("Thanks. How many Multiples do you want?", "20"); //prompt how many times, default is 20, as picked from word doc.

console.log("Multiplication: " + number); //show what multiplication you picked
console.log("How Many Multiples: " + multiples); //how many multiples you pick

var fix = (multiples*multiples/multiples+1); //does some trickery to change varible to a proper number, and add 1. 

for (var i = 1; i < fix; i++) { //loop
  var logging = (number*i); //multiplying 
  console.log(logging); //console logging
  document.write(logging + ", "); //write text and adds ", " to the end of every number.
}





//I wonder if My Teacher will see this secret message ¯\_(ツ)_/¯
