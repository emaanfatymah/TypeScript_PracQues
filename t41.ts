// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  // Creating an array of magician's names
  const magician_names: string[] = ["Haris", "Danish", "Ali", "Taimoor"];
  
  // Calling the function to show the magician names
  show_magicians(magician_names);
  