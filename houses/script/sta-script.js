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

    var asoiaf = require('asoiaf-api');

    const NedInfo = document.querySelector('NedInfo');
    
    const getNedInfo = asoaif.getCharacterByName("Ned Stark")
       getNedInfo.then((r) => r.json())
       .then((json) => console.log(json));
     //  .then((json) => NedInfo.innerHTML = json.Info);


//test
//   const testFetch = fetch("https://www.anapioficeandfire.com/api/books")
//       testFetch.then((response) => response.json())
//        .then((json) => console.log(json));