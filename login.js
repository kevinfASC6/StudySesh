
console.log("somewhere");

var firebaseConfig = {
    apiKey: "AIzaSyDXqHdzV8IoYakz4tr5rhDHL4NAfXTh4ak",
    authDomain: "study-sesh-10dbf.firebaseapp.com",
    databaseURL: "https://study-sesh-10dbf.firebaseio.com",
    projectId: "study-sesh-10dbf",
    storageBucket: "study-sesh-10dbf.appspot.com",
    messagingSenderId: "527300603970",
    appId: "1:527300603970:web:d0cd1d4569892599"
  };
var firebase = require('firebase');
var firebaseui = require('firebaseui');
  function manualLogin(){
  
    var email = "example@example.com";
  var password = "testPasswprd";
//create user email and pass
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });

  
  //Sign In User with Email and Password
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
});

    
  
  //sign out function
  firebase.auth().signOut().then(function() {
    console.log("Sign-out successful")
  }).catch(function(error) {
    console.log(error)
  });
}
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var uiConfig = {
  signInSuccessUrl: 'https://kevinfasc6.github.io/StudySesh/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: "https://google.com",
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('lol.com');
  }
};

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);