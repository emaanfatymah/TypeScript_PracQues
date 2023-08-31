// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let namee="Eman";
let age=21;
let fruit:string[]=["Banana","Mango","Grapes"];

console.log("-> Tests for equality and inequality with strings");
console.log("Is name == 'Eman'? I predict True");
console.log(namee=="Eman");
console.log("Is name == 'Ashaz'? I predict False");
console.log(namee=="Ashaz");

console.log("-> Tests using the lower case function");
console.log("Is name.toLowerCase() == 'eman'? I predict true");
console.log(namee.toLowerCase() == "eman");
console.log("Is name.toLowerCase() == 'EMAN'? I predict true");
console.log(namee.toLowerCase() == "EMAN");

console.log("-> Numerical tests");
console.log("Is age > 20? I predict True.");
console.log(age>20);
console.log("Is age == 20? I predict False.");
console.log(age==20);

console.log("-> Tests using 'and' and 'or' operators");
console.log("Is age > 20 and age < 40? I predict True.");
console.log(age>20 && age<40);
console.log("Is age > 40 or age > 30? I predict False.");
console.log(age>40 || age>30);

console.log("Test whether an item is in a array");
console.log("Is 'Banana' in fruits? I predict True.");
console.log(fruit.includes("Banana"));

console.log("Test whether an item is not in a array");
console.log("Is 'Grapes' not in fruits? I predict False.");
console.log(!fruit.includes("Grapes"));
