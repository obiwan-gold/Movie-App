const searchBar = document.getElementById('search-bar')
const searchList = document.getElementById('search-list');

// Load movies from API
async function searchBar(searchResult) {
  // searchID is typed in parameters
  const URL = `http://www.omdbapi.com/?s=${searchResult}&page=1&apikey=f0951f4b`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  console.log(data.Search);
  // if (data.Response == "True") displayMovie(data.Search);
}

function findMovies() {
  let searchResult = (movieSearchBox.value).trim();
  if (searchTerm.length > 0) {
    searchList.classList.remove('hide-search-list');
    loadMovies(searchTerm);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

// Event listener for onclick & onkeyup

// window.addEventListener('click', (event) => {
//   if (event.target.className != "search-bar-visibility") {
//     searchList.classList.add('hide-search-list');
//   }
// });



