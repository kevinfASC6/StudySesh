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
<<<<<<< HEAD
let Subject = document.getElementById("SubjectSelect").innerText
let math = document.getElementById("Math")
let history = document.getElementById("History")
let science = document.getElementById("Science")
let english = document.getElementById("English")
let worldLang = document.getElementById("WorldLanguage")
let y = document.getElementsByClassName("dropdown")[1]
=======
let math = document.getElementById("SubjectSelect").innerText
>>>>>>> 14162886254f37648ae6643e62d123770a181733
// function test(){
//     document.getElementById("CourseSelect").innerText = 
// }
math.addEventListener("click", filldiv1)
function filldiv1(){
  Subject = "Math"
  y.style.display = "inline"
}
// history.addEventListener
// function filldiv2(){
//   Subject = "History"
// }
// science.addEventListener
// function filldiv3(){
//   Subject = "Science"
// }
// english.addEventListener
// function filldiv4(){
//   Subject = "English"
// }
// worldLang.addEventListener
// function filldiv5(){
//   Subject = "World Language"
// }