//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var bestie="Tehreem bukhari";
console.log(bestie.toLowerCase());
console.log(bestie.toUpperCase());
function titleCase(a:any) {
    return a.toLowerCase().split(' ').map(function(word:any) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(titleCase(bestie));
