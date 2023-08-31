// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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
