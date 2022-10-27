
// 
function searchBar(searchID) {
  fetch(`http://www.omdbapi.com/?s=${searchID}&apikey=f0951f4b`)
    .then(response => {
      return response.json();
    })

    .then(data => {

      console.log(data)
    })
}

// 

