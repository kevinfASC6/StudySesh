 let SchoolName = document.getElementById("SchoolName").innerText

document.getElementById("schoolForm").style.width= "40vw";
document.getElementById("schoolForm").style.fontStyle="14pt";
  function showSubject(){
    if(SchoolName != ""){
    var x = document.getElementsByClassName("dropdown")[0]
    x.style.display = "block";
  }
} 

let search = document.getElementById("Submit");  
let inputVal = document.getElementById("schoolForm")

search.addEventListener('click', searchPlace); 
 
function findPlace(name) {
    let url = `https://data.cityofnewyork.us/resource/r2nx-nhxe.json?location_name=${name}`; 
    fetch(url) 
    .then((response) => response.json()) 
    .then(function(data) { 
        console.log(data);  
        let name = data.location_name 
        let school = new School(name)   
        console.log(school)
        createPokemonElement(school)

          
    }) 
    .catch(function(error)  {
    console.log(error);
    })
}
 
function searchPlace() { 
  findPlace(inputVal.value); 
}

function createPokemonElement(pokemon){ 
  //h1 tag for name  
  let h1 = document.createElement("h1");  
  h1.innerText = pokemon.name;
  //h2 tag fo number  
  let h2 = document.createElement("h2"); 
  h2.innerHTML = pokemon.number; 
  //p tag for types 
  let p = document.createElement("p"); 
  for(let type of pokemon.types) { 
      p.innerText += `${type}`; 
  }
  //ul tag for moves  
  let moveUl = document.createElement("ul"); 
  for(let move of pokemon.moves) { 
      moveUl.innerHTML += `<li>${move}</li>`; 
  }
  //ul tag for abilities  
  let abilityUl = document.createElement("ul"); 
  for(let ability of pokemon.abilities) { 
      abilityUl.innerHTML += `<li>${ability}</li>`; 
  } 
  //h1 tag for image 
  let img = document.createElement("img"); 
  img.src = pokemon.image; 
  //div container for pokemon element 
  let div = document.createElement("div"); 
  div.append(h1, h2, p, moveUl, abilityUl, img); 
  fluidContainer.appendChild(div); 
}