 let SchoolName = document.getElementById("SchoolName").innerText

 
let mathSubject = document.getElementById("Math");
let historySubject = document.getElementById("History");
let scienceSubject = document.getElementById("Science");
let englishSubject = document.getElementById("English");
let worldLanguageSubject = document.getElementById("World Language");
//let SelectedCourse = document.getElementById("BackCourse");

// var marcusMysteryButton = document.createElement("button").innerText


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
//let Course = document.getElementById("BackCourse").innerText
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
let Selected = document.getElementById("BackSubject");
// function test(){
//     document.getElementById("CourseSelect").innerText = 
// }

let Subject = document.getElementById("BackSubject").innerText
function fillbutton2(){
if(Subject == ""){
  Selected.style.display = "none";
}
}
math.addEventListener("click", filldiv1)
function filldiv1(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "Subject: Math"
  y.style.display = "block"
  x.style.display = "none"
}
historySubject.addEventListener("click",filldiv2)
function filldiv2(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = " Subject: History"
  x.style.display = "none"
  a.style.display = "block"
}
scienceSubject.addEventListener("click",filldiv3)
function filldiv3(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "Subject: Science"
  x.style.display = "none"
  b.style.display = "block"
}
englishSubject.addEventListener("click",filldiv4)
function filldiv4(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "Subject: English"
  x.style.display = "none"
  c.style.display = "block"
}
worldLanguageSubject.addEventListener("click",filldiv5)
function filldiv5(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "Subject: World Language"
  x.style.display = "none"
  d.style.display = "block"
}

function reset(){
  x.style.display = "block"
  y.style.display = "hidden"
  a.style.display = "hidden"
  b.style.display = "hidden"
  c.style.display = "hidden"
  d.style.display = "hidden"
}
