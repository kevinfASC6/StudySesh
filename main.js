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
    let url = `https://data.cityofnewyork.us/resource/r2nx-nhxe.json`; 
    fetch(url) 
    .then((response) => response.json()) 
    .then(function(data) { 
        console.log(data);   
          
    }) 
    .catch(function(error)  {
    console.log(error);
    })
}
 
function searchPlace() { 
  findPlace(inputVal.location_name); 
}
document.getElementsByClassName("dropdown-content")[0].addEventListener('click', test)
function test(){
    document.getElementById("CourseSelect").innerText = "2"
}