require("dotenv").config();
const axios = require("axios")
const inquirer = require("inquirer")
// const keys = require("keys.js");

// const spotify = new Spotify(keys.spotify)

const {
    OMDB_API,
    Spotify_API,
    BANDS_IN_TOWN 
} = process.env;

// console.log(OMDB_API)
// console.log(Spotify_API)
// console.log(BANDS_IN_TOWN)

const action = process.argv[2];
const event = process.argv[3]
const queryUrl = `http://www.omdbapi.com/?apikey=trilogy&s=${event}`;
console.log(queryUrl)

switch(action){
    case "concert-this":
            console.log(BANDS_IN_TOWN);
            concert();
    break;

    case "spotify-this-song":
         console.log(Spotify_API);
         Spotify();
        break;

    case"movie-this":
    console.log(OMDB_API);
    movie();
    break;
    

}

// function Spotify()

function movie() {

console.log("lol")

axios.get(queryUrl).then(
    function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
   

});
};





function concert(){}