//Stark family box expansions

document.querySelector('.Ned').addEventListener("click", () => {
    document.querySelector(".Ned").classList.toggle("Ned-closed")});

document.querySelector('.Catelyn').addEventListener("click", () => {
    document.querySelector(".Catelyn").classList.toggle("Catelyn-closed")});

document.querySelector('.Robb').addEventListener("click", () => {
    document.querySelector(".Robb").classList.toggle("Robb-closed")});

document.querySelector('.Sansa').addEventListener("click", () => {
    document.querySelector(".Sansa").classList.toggle("Sansa-closed")});

document.querySelector('.Arya').addEventListener("click", () => {
    document.querySelector(".Arya").classList.toggle("Arya-closed")});

document.querySelector('.Bran').addEventListener("click", () => {
    document.querySelector(".Bran").classList.toggle("Bran-closed")});

document.querySelector('.Rickon').addEventListener("click", () => {
    document.querySelector(".Rickon").classList.toggle("Rickon-closed")});


//Call character data from asoiaf API
//specifically: name, titles, aliases, and playedBy
//have data returned to show within charachter's box in web page

const NedInfo = document.getElementById("339");

const getNedInfo = fetch("https://www.anapioficeandfire.com/api/characters/339")
    getNedInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
    .then((json) => NedInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles.join(', ') + "<br>Aliases: " + json.aliases.join(', ') + "<br>Played By: " + json.playedBy.join(', '));


 const CatelynInfo = document.getElementById("232");

 const getCatelynInfo = fetch("https://www.anapioficeandfire.com/api/characters/232")
     getCatelynInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
    .then((json) => CatelynInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles.join(', ') + "<br>Aliases: " + json.aliases.join(', ') + "<br>Played By: " + json.playedBy);

const RobbInfo = document.getElementById("1880");

 const getRobbInfo = fetch("https://www.anapioficeandfire.com/api/characters/1880")
    getRobbInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
    .then((json) => RobbInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles.join(', ') + "<br>Aliases: " + json.aliases.join(', ') + "<br>Played By: " + json.playedBy);

const SansaInfo = document.getElementById("957");

const getSansaInfo = fetch("https://www.anapioficeandfire.com/api/characters/957")
    getSansaInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
     .then((json) => SansaInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles.join(', ') + "<br>Aliases: " + json.aliases.join(', ') + "<br>Played By: " + json.playedBy);

const AryaInfo = document.getElementById("148");

 const getAryaInfo = fetch("https://www.anapioficeandfire.com/api/characters/148")
     getAryaInfo.then((response) => response.json())
   //  .then((json) => console.log(json))
     .then((json) => AryaInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles.join(', ') + "<br>Aliases: " + json.aliases.join(', ') + "<br>Played By: " + json.playedBy);

const BranInfo = document.getElementById("208");

 const getBranInfo = fetch("https://www.anapioficeandfire.com/api/characters/208")
     getBranInfo.then((response) => response.json())
   //  .then((json) => console.log(json))
     .then((json) => BranInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles.join(', ') + "<br>Aliases: " + json.aliases.join(', ') + "<br>Played By: " + json.playedBy);

const RickonInfo = document.getElementById("891");

 const getRickonInfo = fetch("https://www.anapioficeandfire.com/api/characters/891")
     getRickonInfo.then((response) => response.json())
   //  .then((json) => console.log(json))
     .then((json) => RickonInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles.join(', ') + "<br>Aliases: " + json.aliases.join(', ') + "<br>Played By: " + json.playedBy);












//test 1
//   var asoiaf = require('asoiaf-api.js');

//   const NedInfo = document.querySelector('NedInfo');
    
//    const getNedInfo = asoaif.getCharacterByName("Ned Stark")
//       getNedInfo.then((r) => r.json())
//       .then((json) => console.log(json));
     //  .then((json) => NedInfo.innerHTML = json.Info);


//test 2
//   const testFetch = fetch("https://www.anapioficeandfire.com/api/characters")
//       testFetch.then((response) => response.json())
//        .then((json) => console.log(json));


//for(let index = 0 ; index < 3000; index++) {
//    fetch("https://www.anapioficeandfire.com/api/characters")
//    .then (//"name", "titles", "aliases", "playedBy"
//    )
//            //data.data => ../houses/index.json
//}




