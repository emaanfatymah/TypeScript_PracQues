// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

const current_users: string[] = ["hiba", "ashar", "ashaz", "aiza", "asjal"];
const new_users: string[] = ["asjal", "mano", "hooria", "ashar", "sarah"];

for (let new_username of new_users) {
  let is_username_taken: boolean = false;
  
  for (let current_username of current_users) {
    if (current_username.toLowerCase() === new_username.toLowerCase()) {
      is_username_taken = true;
      break;
    }
  }
  
  if (is_username_taken) {
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}

