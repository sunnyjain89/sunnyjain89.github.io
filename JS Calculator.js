
function calculator(stringInput){
let char = [];
let s;
for(s = 0; s < 4; s++){
	var tempNum = stringInput [s];
  char.push(tempNum);
	}
var numOne = parseInt(char[0]);
var numTwo = parseInt(char[2]);
var symbol = char[1];

if (symbol == "+"){
	return ((numOne + numTwo));
  }
else if (symbol == "x") {
	return(numOne*numTwo);
  }
else if (symbol == "-") {
	return((numOne) - (numTwo));
  }
else if (symbol == "/") {
	return(numOne/numTwo);
  }
}

console.log(calculator("5+3"))
console.log(calculator("5+9"))
console.log(calculator("7-3"))


//This takes the string and puts each character into list
let listOfCalculatorItems = stringInput.split("")