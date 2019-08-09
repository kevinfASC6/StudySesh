 let SchoolName = document.getElementById("SchoolName").innerText



  function myFunction() {
  var x = document.getElementsByClassName("dropdown")
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

document.getElementById("schoolForm").style.width= "40vw";
document.getElementById("schoolForm").style.fontStyle="14pt";

  function showSubject(){
    if(SchoolName != ""){
    var x = document.getElementsByClassName("dropdown")[0]
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }
}