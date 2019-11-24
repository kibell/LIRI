require("dotenv").config();
const axios = require("axios")
// const inquirer = require("inquirer")
const Spotify = require('node-spotify-api');
const keys = require("./key");

// const spotify = new Spotify(keys.spotify)

const {
    OMDB_API,
    Spotify_API,
    BANDS_IN_TOWN 
} = process.env;

// console.log(OMDB_API)
// console.log(Spotify_API)
// console.log(BANDS_IN_TOWN)

let action = process.argv[2];
let event = process.argv[3]
const movieUrl = `http://www.omdbapi.com/?t=${event}&y=&plot=short&apikey=trilogy`;
const concertUrl = `https://rest.bandsintown.com/artists/${event}/events?app_id=codingbootcamp`  
const spotUrl = "https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx"
let spotify = new Spotify(keys.spotify)


switch(action){
    case "concert-this":
            
            concert();
    break;

    case "spotify-this-song":
         
         spot();
        break;

    case"movie-this":
   
    movie();
    break;
    

}

// function Spotify()

function movie() {


axios.get(movieUrl).then(
    function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("The IMDB Rating for this Movie is : " + response.data.imdbRating);
      console.log("The Rotten Tomatoes Rating for this Movie is : " + response.data.Ratings[1].Value)
      console.log("This film was produced in  " + response.data.Country);
      console.log("Language:  " + response.data.Language);
      console.log("Plot:  " + response.data.Plot);
      console.log("Actors:  " + response.data.Actors);
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


function concert(){
    axios.get(concertUrl).then(
        function(response) {
          console.log(response.data[0].artist.name);
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


}

function spot(){

//not working ask questions
    if(event == null){
        event = "humble";
   };

    


    spotify.search({ type: "track", query: event }, function(err, result) {
       

        if (err) {
            console.log(err);
        };

       
        // console.log(result.tracks.items
 console.log("Artist: " + result.tracks.items[0].artists[0].name)
 console.log("Song Title: " + result.tracks.items[0].name)
 console.log("Preview This Track: " + result.tracks.items[0].preview_url)
 console.log("Album: " + result.tracks.items[0].album.name)
 

});

}
