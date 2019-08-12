let SchoolName = document.getElementById("SchoolName").innerText

let mathSubject = document.getElementsByClassName("Math");
let historySubject = document.getElementsByClassName("History");
let scienceSubject = document.getElementsByClassName("Science");
let englishSubject = document.getElementsByClassName("English");
let worldLanguageSubject = document.getElementsByClassName("World Language");
let Selected = document.getElementsByClassName("BackSubject");
var x = document.getElementsByClassName("dropdown")[0]
//let SelectedCourse = document.getElementsById("BackCourse");




document.getElementById("schoolForm").style.width= "40vw";
document.getElementById("schoolForm").style.fontStyle="14pt";
  function showSubject(){
    if(SchoolName != ""){
    x.style.display = "block";
  }
} 

let search = document.getElementsByClassName("Submit");  
let inputVal = document.getElementById("schoolForm")

search.addEventListener("click", searchPlace); 
 
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
let Subject = document.getElementsByClassName("BackSubject").innerText
//let Course = document.getElementsById("BackCourse").innerText
let math = document.getElementsByClassName("Math")
let history = document.getElementsByClassName("History")
let science = document.getElementsByClassName("Science")
let english = document.getElementsByClassName("English")
let worldLang = document.getElementsByClassName("WorldLanguage")
let e = document.getElementsByClassName("dropdown")[1]
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
  e.style.display = "block"
  x.style.display = "none"
}
historySubject.addEventListener("click",filldiv2)
function filldiv2(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "History"
  x.style.display = "none"
  a.style.display = "block"
}
scienceSubject.addEventListener("click",filldiv3)
function filldiv3(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "Science"
  x.style.display = "none"
  b.style.display = "block"
}
englishSubject.addEventListener("click",filldiv4)
function filldiv4(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "English"
  x.style.display = "none"
  c.style.display = "block"
}
worldLanguageSubject.addEventListener("click",filldiv5)
function filldiv5(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "World Language"
  x.style.display = "none"
  d.style.display = "block"
}  

function makeid(length) {
  var result           = "";
  var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


console.log(makeid(5));




function reset(){
  x.style.display = "block"
  if(Subject == "Math"){
    y.style.display = "inline"
  }
}

