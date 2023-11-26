//Lannister family box expansions

document.querySelector('.Joanna').addEventListener("click", () => {
    document.querySelector(".Joanna").classList.toggle("Joanna-closed")});

document.querySelector('.Tywin').addEventListener("click", () => {
    document.querySelector(".Tywin").classList.toggle("Tywin-closed")});

document.querySelector('.Jamie').addEventListener("click", () => {
    document.querySelector(".Jamie").classList.toggle("Jamie-closed")});

document.querySelector('.Cersei').addEventListener("click", () => {
    document.querySelector(".Cersei").classList.toggle("Cersei-closed")});

document.querySelector('.Tyrion').addEventListener("click", () => {
    document.querySelector(".Tyrion").classList.toggle("Tyrion-closed")});

    


//Call character data from asoiaf API
//specifically: name, titles, aliases, and playedBy
//have data returned to show within charachter's box in web page

//const TywinInfo = document.getElementById("");

//const getTywinInfo = fetch("https://www.anapioficeandfire.com/api/characters/")
//    getTywinInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
//    .then((json) => TywinInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);


// const JoannaInfo = document.getElementById("");

// const getJoannaInfo = fetch("https://www.anapioficeandfire.com/api/characters/")
//     getJoannaInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
//    .then((json) => JoannaInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);


const CerseiInfo = document.getElementById("238");

const getCerseiInfo = fetch("https://www.anapioficeandfire.com/api/characters/238")
    getCerseiInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
     .then((json) => CerseiInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);

const JamieInfo = document.getElementById("529");

 const getJamieInfo = fetch("https://www.anapioficeandfire.com/api/characters/529")
     getJamieInfo.then((response) => response.json())
   //  .then((json) => console.log(json))
     .then((json) => JamieInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);

const TyrionInfo = document.getElementById("1052");

 const getTyrionInfo = fetch("https://www.anapioficeandfire.com/api/characters/1052")
     getTyrionInfo.then((response) => response.json())
   //  .then((json) => console.log(json))
     .then((json) => TyrionInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);

