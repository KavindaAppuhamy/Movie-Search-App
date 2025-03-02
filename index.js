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