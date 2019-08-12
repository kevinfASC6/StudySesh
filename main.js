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
let math = document.getElementById("SubjectSelect").innerText
// function test(){
//     document.getElementById("CourseSelect").innerText = 
// }

function filldiv1(){
  math = "Math"
}
function filldiv2(){
  math = "History"
}
function filldiv3(){
  math = "Science"
}
function filldiv4(){
  math = "English"
}
function filldiv5(){
  math = "World Language"
}