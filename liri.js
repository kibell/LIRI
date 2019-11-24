require("dotenv").config();
// const keys = require("keys.js");

// const spotify = new Spotify(keys.spotify)

const {
    OMDB_API,
    Spotify_API,
    BANDS_IN_TOWN 
} = process.env;

console.log(OMDB_API)
console.log(Spotify_API)
console.log(BANDS_IN_TOWN)