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
        console.log(user);
        console.log(user.displayName + " is currently logged in.");
        document.getElementById("Username").innerHTML = `Logged in as: ${user.displayName}`
  
      } else {
        document.getElementById("Username").innerHTML = `Your are not logged in :C`
        console.log("No one is logged in.")
        console.log(user);
      }
    },function(error){
      console.lof(error)
    })
  }
  
  window.addEventListener('load',function(){
    initApp()
  })




const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton"); 
const roomCode = localStorage.getItem("randCodeGen"); 
button.addEventListener('click',updateDB);
//Set database object here
console.log(roomCode)
const database = firebase.database().ref(roomCode)

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    if(usernameElement.value.length > 0 && messageElement.value.length > 0){
        event.preventDefault();
        const username        = usernameElement.value;
        const message         = messageElement.value;

        usernameElement.value = "";
        messageElement.value  = "";

        console.log(username + " : " + message);

        //Update database here
        const messageObj = { 
            USERNAME: username, 
            MESSAGE: message
        } 
        database.push(messageObj)
    }
}

// Set database "child_added" event listener here 
database.on("child_added", addMessageToBoard);  

const messageBoard = document.getElementsByClassName("allMessages")[0]

function addMessageToBoard(rowData) { 
    const row = rowData.val() 
    console.log(row)  
    const pElement = document.createElement("p") 
    pElement.innerText = `${row.USERNAME}: ${row.MESSAGE}`  

    messageBoard.appendChild(pElement)
}

window.onload = function(){
    console.log(roomCode);
}