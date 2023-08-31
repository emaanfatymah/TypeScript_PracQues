// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

var friendss:string[]=["Aiza","Hifza","Fatima"];
var invite_msg="you are cordially invited to dinner. We would be honored to have your presence.";
friendss.forEach(friendss=>{
    console.log("Dear",friendss,invite_msg);
})

console.log("->",friendss[2],"is unable to attend the dinner.");
friendss[2]="Ayesha";
friendss.forEach(friendss=>{
    console.log("Dear",friendss,invite_msg);
})

console.log("-> Good news! We found a bigger dinner table.");
friendss.unshift("Eshal");
friendss.push("Hafsah");
friendss.splice(Math.floor(friendss.length/2),0,"Eman");
friendss.forEach(friendss=>{
    console.log("Dear",friendss,invite_msg);
})

console.log("We regret to inform you that the new dinner table won't arrive in time. We can only invite two people for dinner.");
while(friendss.length>2){
    var removed_friend:string=friendss.pop()!;
    console.log("Sorry",removed_friend,"We can't invite you to dinner.");
}
friendss.forEach(friendss=>{
    console.log(friendss,"you're still invited");
})
friendss.length=0;
console.log("Guests list: ",friendss);