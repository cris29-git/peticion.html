//import axios from "axios";

function getcharacterdata(charid) {
    let app = document.getElementById('app') 
    let inputid = document.getElementById('charidinput').value
    axios.get(`https://rickandmortyapi.com/api/character/${inputid}/`)
    .then((response) => {
        const character = response.data
        console.log(character)
        app.innerHTML = 
            `<div class="character__container">
               <img 
               src="${character.image}"
               class="character__image"
               />
               <h2 class="character___name">${character.name}</h2>
               <ul class="character__attributes">
                   <li>status:${character.status}</li>
                   <li>genero:${character.gender}</li>
                   <li>ubicacion:${character.location.name}</li>
                   <li>especie:${character.species}</li>
                </ul>
            </div> `
    })
    .catch((error) => console.log(error))
}
getcharacterdata(9)