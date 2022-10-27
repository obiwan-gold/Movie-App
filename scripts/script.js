fetch ('http://www.omdbapi.com/?i=tt0076759&plot=full')
.then(response => {
    return response.json();
})

    .then(data => {

        console.log(data)
    })