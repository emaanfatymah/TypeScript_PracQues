// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

var alien_color:string="green";

if(alien_color=="green"){
    console.log("Congrats! You've earned 5 points.");
}
else{
    console.log("You just earned 2 points.");
}

alien_color="yellow";
if(alien_color=="yellow"){
    console.log("Congrats! You've earned 10 points.");
}
else{
    console.log("You just earned 2 points.");
}

alien_color="red";
if(alien_color=="red"){
    console.log("Congrats! You've earned 15 points.");
}
else{
    console.log("You just earned 2 points.");
}