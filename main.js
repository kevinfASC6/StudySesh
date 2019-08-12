 let SchoolName = document.getElementById("SchoolName").innerText

let mathSubject = document.getElementById("Math");
let historySubject = document.getElementById("History");
let scienceSubject = document.getElementById("Science");
let englishSubject = document.getElementById("English");
let worldLanguageSubject = document.getElementById("World Language");
let Selected = document.getElementById('SubjectSelect');


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
  let value = inputVal.value 
  if(value.toLowerCase() === value.toLowerCase())
  findPlace(value.trim()); 
}
let Subject = document.getElementById("SubjectSelect").innerText
let math = document.getElementById("Math")
let history = document.getElementById("History")
let science = document.getElementById("Science")
let english = document.getElementById("English")
let worldLang = document.getElementById("WorldLanguage")
let y = document.getElementsByClassName("dropdown")[1]
let a = document.getElementsByClassName("dropdown")[2]
let b = document.getElementsByClassName("dropdown")[3]
let c = document.getElementsByClassName("dropdown")[4]
let d = document.getElementsByClassName("dropdown")[5]
// function test(){
//     document.getElementById("CourseSelect").innerText = 
// }
math.addEventListener("click", filldiv1)
function filldiv1(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "Math"
  y.style.display = "block"
  x.style.display = "none"
}
historySubject.addEventListener("click",filldiv2)
function filldiv2(){
  var x = document.getElementsByClassName("dropdown")[0]
  x.style.display = "none"
  a.style.display = "block"
}
scienceSubject.addEventListener("click",filldiv3)
function filldiv3(){
  var x = document.getElementsByClassName("dropdown")[0]
  x.style.display = "none"
  b.style.display = "block"
}
englishSubject.addEventListener("click",filldiv4)
function filldiv4(){
  var x = document.getElementsByClassName("dropdown")[0]
  x.style.display = "none"
  c.style.display = "block"
}
worldLanguageSubject.addEventListener("click",filldiv5)
function filldiv5(){
  var x = document.getElementsByClassName("dropdown")[0]
  x.style.display = "none"
  d.style.display = "block"
}