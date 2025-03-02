# Movie Searching App

## Overview
The **Movie Searching App** is a simple web application that allows users to search for movies using the OMDb API. Users can enter a movie name, and the app will fetch and display details such as the title, release year, IMDb rating, and plot summary, along with the movie poster.

## Features
- Search for movies by name
- Fetch movie details from the OMDb API
- Display movie title, release year, release date, IMDb rating, and plot summary
- Display movie poster
- Responsive and visually appealing UI

## Technologies Used
- HTML
- CSS
- JavaScript
- OMDb API

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/KavindaAppuhamy/movie-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-search-app
   ```
3. Open `index.html` in your web browser.

## Usage
1. Open the application in a web browser.
2. Enter a movie name in the search box.
3. Click the **Search** button.
4. View the movie details displayed on the page.

## Project Structure
```
movie-search-app/
│── index.html       # Main HTML file
│── index.css        # Styling for the app
│── index.js         # JavaScript logic for fetching movie data
└── README.md        # Documentation
```

## API Integration
The app fetches movie data from the OMDb API using the following API endpoint:
```
https://www.omdbapi.com/?apikey=YOUR_API_KEY&t=MOVIE_NAME
```
Replace `YOUR_API_KEY` with a valid OMDb API key.

## Future Improvements
- Implement error handling for invalid movie searches
- Add a loading indicator while fetching data
- Improve UI design for better user experience
- Allow searching by different parameters (e.g., year, genre)

## Author
Kavinda Appuhamy (https://github.com/KavindaAppuhamy)

---
Feel free to contribute to this project by submitting issues or pull requests!

