// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string, title: string, tracks?: number): object {
    const album: any = {
      artist: artist,
      title: title
    };
    
    if (tracks) {
      album.tracks = tracks;
    }
    
    return album;
  }
  
  // Calling the function to create three album objects
  const album1: object = make_album("Ed Sheeran", "Divide");
  const album2: object = make_album("Taylor Swift", "1989", 16);
  const album3: object = make_album("Imagine Dragons", "Evolve", 14);
  
  // Printing the album objects
  console.log(album1);
  console.log(album2);
  console.log(album3);
  