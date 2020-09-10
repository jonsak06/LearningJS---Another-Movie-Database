const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const updateMovieList = () => {
    if (movies.length > 0) {
        movieList.classList.add("visible");
    } else {
        movieList.classList.remove("visible");
    }
};

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");

    if (movies.length > 0) {
        movieList.classList.add("visible");
    } else {
        movieList.classList.remove("visible");
        return;
    }

    movieList.innerHTML = "";
    
    const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

    
    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement("li");
        const { info } = movie; //object destructuring
        let text = info.title + " - ";

        for (const key in info) {
            if (key !== "title") {
                text += `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (
        title.trim() === "" ||
        extraName.trim() === "" ||
        extraValue.trim() === ""
    ) {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue,
        },
        movieID: Math.random(),
    };
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const movieTitle = document.getElementById("filter-title").value;
    renderMovies(movieTitle);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", searchMovieHandler);
