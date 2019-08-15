var firebaseConfig = {
  apiKey: "AIzaSyDXqHdzV8IoYakz4tr5rhDHL4NAfXTh4ak",
  authDomain: "study-sesh-10dbf.firebaseapp.com",
  databaseURL: "https://study-sesh-10dbf.firebaseio.com",
  projectId: "study-sesh-10dbf",
  storageBucket: "study-sesh-10dbf.appspot.com",
  messagingSenderId: "527300603970",
  appId: "1:527300603970:web:d0cd1d4569892599"
};
firebase.initializeApp(firebaseConfig);

function initApp(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      console.log(user.displayName + " is currently logged in.")
    } else {
      //If user isn't logged in 
      console.log("No one is logged in.")
    }
  },function(error){
    console.lof(error)
  })
}

window.addEventListener('load',function(){
  initApp()
})

let SchoolName = document.getElementById("schoolForm")
let mathSubject = document.getElementById("Math");
let historySubject = document.getElementById("History");
let scienceSubject = document.getElementById("Science");
let englishSubject = document.getElementById("English");
let worldLanguageSubject = document.getElementById("World Language");
let Selected = document.getElementsByClassName("BackSubject"); 
let displayRanGen = document.getElementById("randomGenerator");   
let redirectMsg = document.getElementById('redirMsg');   
let randCodeGen = document.getElementById("randCodeGen") 

randCodeGen.addEventListener('click', enRoom)   

var code;
function enRoom() { 
  const database = firebase.database().ref(code)
  const messageObj = { 
      USERNAME: "StudySesh", 
      MESSAGE: `Welcome to your new room! Your room code is ${code}`
  } 
  database.push(messageObj).then(() =>{
    localStorage.setItem("randCodeGen",code)
    window.location.href = 'message.html'
  })
}


redirectMsg.addEventListener('click', readMsg); 

function readMsg() { 
  //if document.getElementById("CodeEnter").value is an existing table in the databse then set then localStorage.setItem("randCodeGen",document.getElementById("CodeEnter").value);
  checkForRoom(document.getElementById("CodeEnter").value,function(){
    localStorage.setItem("randCodeGen",document.getElementById("CodeEnter").value);
    window.location.href = "message.html"
  })
}


function findPlace(name) {
  var x = document.getElementsByClassName("dropdown")[0]
    let url = `https://data.cityofnewyork.us/resource/r2nx-nhxe.json?$where=upper(location_name)=upper('${name}')`; 
    fetch(url) 
    .then((response) => response.json()) 
    .then(function(data) { 
        code = makeid(5)
    })
    .catch(function(error)  {
    console.log(error);
    })
} 

function checkForRoom(code,callback) {
    let databaseRef = firebase.database().ref(code)
    databaseRef.on("value",function(data){
      if(data.val() != null){
        callback()
      }
    })
}

var x = document.getElementsByClassName("dropdown")[0]
let SelectedCourse = document.getElementById("BackCourse");
document.getElementById("schoolForm").style.width= "40vw";
document.getElementById("schoolForm").style.fontStyle="14pt";
function showSubject(){
  if(SchoolName.value.length > 0){
    x.style.display = "block";
    let value = inputVal.value;
    if(value.toLowerCase() === value.toLowerCase())
      findPlace(value.trim());
  }
  else{
    console.log("alert!!!")
    alert("Make sure to enter a school!")
  }
} 
let search = document.getElementsByClassName("Submit")[0];
//search.style.display = "none";
let inputVal = document.getElementById("schoolForm")
//search.addEventListener('click', searchPlace); 
function searchPlace() { 
search.style.display = "block";
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
// function test(){
//   document.getElementById("CourseSelect").innerText = 

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
Selected.innerText = "History"
x.style.display = "none"
a.style.display = "block"
}
// Hi Kevin
scienceSubject.addEventListener("click",filldiv3)
function filldiv3(){
var x = document.getElementsByClassName("dropdown")[0]
Selected.innerText = "Science"
b.style.display = "block"
x.style.display = "none"
}
englishSubject.addEventListener("click",filldiv4)
function filldiv4(){
var x = document.getElementsByClassName("dropdown")[0]
Selected.innerText = "English"
x.style.display = "none"
c.style.display = "block"
}
worldLang.addEventListener("click",filldiv5)
function filldiv5(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "World Language"
  x.style.display = "none"
  d.style.display = "block"
}   


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  } 
  return result;   
} 

function reset(){
  y.style.display = "none"
  a.style.display = "none"
  b.style.display = "none"
  c.style.display = "none"
  d.style.display = "none"
  x.style.display = "block"
  displayRanGen.innerText = ""
  Create.style.display = "none"
}

function sessionCode(){
  displayRanGen.style.display = "block"
  Join.style.display = "none"
}
Create = document.getElementById('NewChat')
Join = document.getElementById('CodeForm')
function showCreateJoin(){
  y.style.display = "none"
  a.style.display = "none"
  b.style.display = "none"
  c.style.display = "none"
  d.style.display = "none"
  Create.style.display = "inline"
}

function insertSessionCode(){
Join.style.display = "block"
displayRanGen.style.display = "none"
}
Create.style.display = "none"

function sessionCode(){
  displayRanGen.style.display = "block"
  Join.style.display = "none"
}
Create = document.getElementById('NewChat')
Join = document.getElementById('CodeForm')
function showCreateJoin(){
  y.style.display = "none"
  a.style.display = "none"
  b.style.display = "none"
  c.style.display = "none"
  d.style.display = "none"
  Create.style.display = "inline"
}

function insertSessionCode(){
Join.style.display = "block"
displayRanGen.style.display = "none"
} 
function RedirecttoLogin(){
  window.location.href = "login.html"
}
