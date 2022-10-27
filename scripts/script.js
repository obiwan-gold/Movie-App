
// 
function searchBar(searchID){
    fetch(`http://www.omdbapi.com/?i=${searchID}&apikey=f0951f4b`)
    .then(response => {
      return response.json();
    })

    .then(data => {

      console.log(data)
    })
}

// 

function createMovieCard(movieObject) {

  //parent Section:
  const newMovieCard = document.createElement('Section').classList.add('movie-cards')
  //child: movie title:
  const movieTitle = document.createElement('h2').classList.add('movie-titles');
  //child: card image:
  const moviePoster = document.createElement('img').classList.add('posters');
  moviePoster.setAttribute('src', `${movieObject.image}`);
  moviePoster.setAttribute('alt', `movie poster for ${movieObject.title}`);
  //child: section containing description, date and price:
  const movieInfo = document.createElement('section').classList.add('movie-info');

  //children of movieInfo section:
  const movieReleaseYear = document.createElement('span').classList.add('release-years');
  const movieRating = document.createElement('span').classList.add('ratings');
  const movieRuntime = document.createElement('span').classList.add('runtimes');
  const movieGenre = document.createElement('span').classList.add('genres');

  //child: paragraph containing plot summary
  const plotSummary = document.createElement('p').classList.add('summaries');

  //adding content to all the created sections
  movieTitle.innerText = movieObject.name;

  movieReleaseYear.innerText = movieObject.Year;
  movieRating.innerText = movieObject.Rating;
  movieRuntime.innerText = movieObject.Runtime;
  movieGenre.innerText = movieObject.Genre;

  plotSummary.innerText = movieObject.plot


  movieInfo.append(movieReleaseYear, movieRating, movieRuntime, movieGenre);
  newMovieCard.append(movieTitle, moviePoster, movieInfo, plotSummary);

  const movieCardsSection = document.getElementById('movie-cards-section');
  movieCardsSection.appendChild(newMovieCard);


};

searchBar('tt0076759')