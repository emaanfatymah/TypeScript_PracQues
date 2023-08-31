// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirtt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
  }
  
  // Calling the function with default values
  make_shirtt(); // Large shirt with default message
  make_shirtt("Medium"); // Medium shirt with default message
  make_shirtt("Small", "Chai Lover!"); // Custom size and message
  