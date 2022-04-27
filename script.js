// API: https://api.tvmaze.com/search/shows?q=${inputField.value}



// Load Movies from API



async function loadShows(searchTerm){
    const URL = `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    const res = await fetch(`${URL}`)
    const data = await res.json()   
    const results = data.map(show => show.show)
    displayShows(results)
}


// take the results from the above function and display them in the DOM

function displayShows(results) {
    const resultsContainer = document.getElementById("results")

    // to avoid displaying all the results at once, will displayed only the first 10 results
    resultsContainer.innerHTML = ""
    results.forEach(result => {
        let show = document.createElement("div")
        show.classList.add("my-show")
        show.innerHTML = 
        
        `<div class="show-grid">
        <div class="my-show-poster">
        <img src = "${result.image.medium}">
        </div>
        <div class="my-show-title">${result.name}</div>
        <div class="my-show-summary">${result.summary}</div>
        <div class="my-show-rating">${result.rating.average}</div>
        <div class="my-show-runtime">${result.runtime}</div>
        <div class="my-show-genre">${result.genres}</div>
        </div>`
        resultsContainer.appendChild(show)
    });

}

// to display the content based on what has been wrote in the input field 

window.onload = () => {
    const inputField = document.getElementById("input-field")
    inputField.onkeyup = (event) => {
        loadShows(inputField.value)
        console.log(inputField.value)
    }
}






 



