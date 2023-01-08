// Create an array which value is the planets of the solar system.

let solarSystemPlanet=["Mercure","Vénus","Terre","Mars","Jupiter","Saturne","Uranus","Neptune"];


//For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
/*Each planet should have a different background color. 
(Hint: you could add a new class to each planet- each 
class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below).
 */



// Let's also create a background's array.
let color=["yellow","white","green","orange","blue","brown","lightblue", "lightgreen"]
// A loop creating each div
for (i=0; i < solarSystemPlanet.length; i++){
   let  div= document.createElement("div"); // creating each div
   div.textContent=solarSystemPlanet[i]; // puting the div's textNode 
   div.className="planet"; //creating the class planet 
   div.classList.add(`${solarSystemPlanet[i]}`); // adding another class which is the name of the planet
   div.style.backgroundColor=color[i]; //changing the backgroundColor
   let section = document.querySelector(".listPlanets") // selecting the section in order to put the div into it.
   section.appendChild(div); // puting the div into the section
}

/* Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/


// Let's create an object for moons

let moons={
    Mercure: 0,
    Vénus: 0,
    Terre: 1,
    Mars: 2,
    Jupiter: 79,
    Saturne: 61,
    Uranus: 27,
    Neptune: 14
}

    for (j in solarSystemPlanet){// Loop for system solar's array
        for (let [key,value] of Object.entries(moons)){ // loop for keys  and values of moon's object 
            if (solarSystemPlanet[j]===key){ // A condition for corresponding items between solar system's items and moon's items
                let moonDiv=document.createElement("div"); // creationg a div
                moonDiv.className="moon";  // creating a class for the div
                moonDiv.textContent=value; // affect the number of moons to the div content
                let planetDiv=document.querySelector(`.${solarSystemPlanet[j]}`); 
                planetDiv.appendChild(moonDiv) // appending the moon's div to the planet's div
            }
        }
    }




