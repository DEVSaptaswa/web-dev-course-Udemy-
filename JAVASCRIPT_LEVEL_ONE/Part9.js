var firstName = prompt("Hello and Welcome. Please enter your first name:");
var lastName = prompt("Please enter your Last Name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is the name of your pet?");
alert("Thank you so much for the information.")

var nameCond = false;
if (firstName[0] === lastName[0]) {
    nameCond = true;
}

var ageCond = false;
if (age > 20 && age < 30) {
    ageCond = true;
}

var heightCond = false;
if (height >= 170) {
    heightCond = true;
}

var petCond = false;
if (petName[petName.length-1] === "y") {
    petCond = true;
}

if (nameCond && ageCond && heightCond && petCond) {
    console.log("Welcome Comrade! You've passed the Spy Test");
}else{
  console.log("Sorry, nothing to see here.");
}
