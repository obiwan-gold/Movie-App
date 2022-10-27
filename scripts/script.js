
// Load movies from API
async function searchBar(searchID) {
  // searchID is typed in parameters
  const URL = `http://www.omdbapi.com/?i=${searchID}&page=1&apikey=f0951f4b`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  // console.log(data.Search);
  if (data.Response == "True") displayMovie(data.Search);
}


// If the user types in the search Bar
window.onload = () => {
  const searchField = document.getElementById('movie-searchBox');
  searchField.onkeyup = (e) => {
    searchBar(searchField.value)
  }
}

// If the user clicks off the search bar, the search bar disappears.
window.addEventListener('click', (event) => {
  if (event.target.className != "search-bar-visibility") {
    searchList.classList.add('hide-search-list');
  }
});


