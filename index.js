function search(){
    console.log("searching...");
    let movieTag = document.getElementById("movieTag")
    let movie = movieTag.value 
    console.log(movie)
    let apiKey = "ec60c24"
    let url = "https://www.omdbapi.com/?apikey="+apiKey+"&t="+movie
    
    let httpRequest = new XMLHttpRequest()
    httpRequest.open("GET", url)
    httpRequest.responseType = "json" 
    httpRequest.send() 
    
    httpRequest.onload = function(){
        console.log(httpRequest.response)
        let posterTag = document.getElementById("poster")
        let titleTag = document.getElementById("title")
        let plotTag = document.getElementById("plot")
        let yearTag = document.getElementById("year")
        let imdbTag = document.getElementById("imdb")
        let releasedDate = document.getElementById("releasedDate")

        posterTag.src = httpRequest.response.Poster 
        titleTag.innerHTML = httpRequest.response.Title 
        plotTag.innerHTML = httpRequest.response.Plot
        yearTag.innerHTML = httpRequest.response.Year
        imdbTag.innerHTML = httpRequest.response.imdbRating
        releasedDate.innerHTML = httpRequest.response.Released

    }
} 

function showSuggestions() {
    const input = document.getElementById('movieTag').value;
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';
    if (input.length < 2) return;

    let apiKey = "ec60c24";
    let url = "https://www.omdbapi.com/?apikey=" + apiKey + "&s=" + input;

    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.responseType = "json";
    httpRequest.send();

    httpRequest.onload = function() {
        const response = httpRequest.response;
        if (response.Response === "True") {
            response.Search.forEach(movie => {
                const li = document.createElement('li');
                li.textContent = movie.Title;
                li.onclick = () => {
                    document.getElementById('movieTag').value = movie.Title;
                    suggestionsBox.innerHTML = '';
                    search(); // Optionally trigger search immediately
                };
                suggestionsBox.appendChild(li);
            });
        }
    };
}

// Attach event listener to the input field
document.getElementById('movieTag').addEventListener('input', showSuggestions);