// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew(name) {
    roster.push(name);
    roster.forEach(console.log);
    
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove(name) {
    var index = roster.indexOf(name);
    if (index > -1) {
        roster.splice(index,1);
    }
    roster.forEach(console.log);
}
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display() {
    roster.forEach(console.log);
}
// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app
var response = prompt("Would you like to start the roster web app? y/n");
var choice = "empty"
if (response == "y") {
    while (choice != "quit") {
        var choice = prompt("Please select an action: add, remove, display, or quit.")
        switch (choice) {
            case "add":
                var n = prompt("Please enter the name to add:");
                addNew(n);
                break;
            
            case "remove":
                var n = prompt("Please enter the name to remove:");
                remove(n);
                break;

            case "display":
                display();
                break;

            case "quit":
                alert("Thanks for using the Web App! Please refresh the page to start over.");
                break;
        
            default:
                break;
            }
        }
    }
alert("Thanks for using the Web App! Please refresh the page to start over.");
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
