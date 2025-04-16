// Define the Movie class

  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information
  class Movie {
    #title;
    #cast;
    #description;
    #rating;
    constructor(title, cast, description, rating) {
      this.#title = title;
      this.#cast = cast;
      this.#description = description;
      this.#rating = rating;
    }
    updateRating(newRating) {
      this.#rating = newRating
    }
    displayInfo() {
      const movieInfo = document.getElementById("movie-info")
      movieInfo.innerHTML = `
        <p>Title: ${this.#title}</p> 
        <p>Cast: ${this.#cast}</p>
        <p>Description: ${this.#description}</p>
        <p>Rating: ${this.#rating}</p>
      `
    }

  }

const movies = []

firstMovie = new Movie(
  "Ready Player One",
  ["Tye Sheridan", "Olivia Cooke", "Ben Mendelsohn"],
  "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
  10
)

movies.push(firstMovie)
firstMovie.displayInfo()

function updateMovieRating(title, newRating) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getTitle == title) {
      movies[i].updateMovieRating(newRating);
      movies[i].displayInfo();
      return;
    }
  }
}
// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie