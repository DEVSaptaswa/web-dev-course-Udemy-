/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
for (let index = 0; index < 5; index++) {
    console.log("hello");
    
}
// Do this with a While Loop and a For Loop

// While Loop
var count = 5;
while (count != 0) {
    console.log("Hello");
    count--;
}

// For Loop
for (let index = 0; index < 5; index++) {
    console.log("hello");
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var count = 1;
while (count != 26) {
    if (count%2 != 0) {
        console.log(count);
    }
    count++;
}

// METHOD TWO
// For Loop
for (let index = 1; index < 26; index++) {
    if (index%2!=0) {
        console.log(index);
    }
    
}