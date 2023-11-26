//Baratheon family box expansions

document.querySelector('.Robert').addEventListener("click", () => {
    document.querySelector(".Robert").classList.toggle("Robert-closed")});

document.querySelector('.Cersei').addEventListener("click", () => {
    document.querySelector(".Cersei").classList.toggle("Cersei-closed")});

document.querySelector('.Joffery').addEventListener("click", () => {
    document.querySelector(".Joffery").classList.toggle("Joffery-closed")});

document.querySelector('.Mrycella').addEventListener("click", () => {
    document.querySelector(".Mrycella").classList.toggle("Mrycella-closed")});

document.querySelector('.Tommen').addEventListener("click", () => {
    document.querySelector(".Tommen").classList.toggle("Tommen-closed")});



//Call character data from asoiaf API
//specifically: name, titles, aliases, and playedBy
//have data returned to show within charachter's box in web page

const RobertInfo = document.getElementById("901");

const getRobertInfo = fetch("https://www.anapioficeandfire.com/api/characters/901")
    getRobertInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
    .then((json) => RobertInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);


 const CerseiInfo = document.getElementById("238");

 const getCerseiInfo = fetch("https://www.anapioficeandfire.com/api/characters/238")
     getCerseiInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
    .then((json) => CerseiInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);


const JofferyInfo = document.getElementById("565");

const getJofferyInfo = fetch("https://www.anapioficeandfire.com/api/characters/565")
    getJofferyInfo.then((response) => response.json())
  //  .then((json) => console.log(json))
     .then((json) => JofferyInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);

const MyrcellaInfo = document.getElementById("775");

 const getMyrcellaInfo = fetch("https://www.anapioficeandfire.com/api/characters/775")
     getMyrcellaInfo.then((response) => response.json())
   //  .then((json) => console.log(json))
     .then((json) => MyrcellaInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);

const TommenInfo = document.getElementById("1029");

 const getTommenInfo = fetch("https://www.anapioficeandfire.com/api/characters/1029")
     getTommenInfo.then((response) => response.json())
   //  .then((json) => console.log(json))
     .then((json) => TommenInfo.innerHTML = "Name: " + json.name + "<br>Titles: " + json.titles + "<br>Aliases: " + json.aliases + "<br>Played By: " + json.playedBy);

