"use strict";
var friendss = ["Aiza", "Hifza", "Fatima"];
var invite_msg = "you are cordially invited to dinner. We would be honored to have your presence.";
friendss.forEach(friendss => {
    console.log("Dear", friendss, invite_msg);
});
console.log("->", friendss[2], "is unable to attend the dinner.");
friendss[2] = "Ayesha";
friendss.forEach(friendss => {
    console.log("Dear", friendss, invite_msg);
});
console.log("-> Good news! We found a bigger dinner table.");
friendss.unshift("Eshal");
friendss.push("Hafsah");
friendss.splice(Math.floor(friendss.length / 2), 0, "Eman");
friendss.forEach(friendss => {
    console.log("Dear", friendss, invite_msg);
});
var list = friendss.length;
console.log("We are inviting", list, "people to dinner.");
