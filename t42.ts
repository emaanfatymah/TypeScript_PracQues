// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
    }
  }
  
  function show_magicianss(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  // Creating an array of magician's names
  const magician_namess: string[] = ["Haris", "Danish", "Ali", "Taimoor"];
  
  // Modifying the magician names to add "the Great"
  make_great(magician_namess);
  
  // Calling the function to show the modified magician names
  show_magicianss(magician_namess);
  