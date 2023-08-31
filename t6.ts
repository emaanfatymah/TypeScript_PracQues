//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let per_name="\t\n  Eman Fatima \t\n";
console.log("Person name with whitespace:",per_name);
let stripped_name=per_name.trim();
console.log("Person name after stripping whitespace:",stripped_name);