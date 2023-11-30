
const houses = ["/houses/stark.html", "/houses/Lannister.html", "/houses/Baratheon.html"]

document.getElementById('random-house').addEventListener("click", () =>{
   
    const getRandomHouse = Math.floor(Math.random(houses) * houses.length);
    //console.log(houses[getRandomHouse]);
    //window.location.href = "/houses/stark.html";
    window.location.href = houses[getRandomHouse];

});
