import {fetchWithTimeout} from "./services";

const movies = require('./data/movies.json');

export function fetchMovies()
 {
  const resolveFunction = () => movies;

  fetchWithTimeout(1000).then(resolveFunction);
 }

var moviePromise = Promise(function(fetchMovies){
 fetchMovies();
});

moviePromise.then(
    function(results){console.log(results);}
)