var firebase = require('firebase');
var firebaseui = require('firebaseui');
var firebaseConfig = {
    apiKey: "AIzaSyDXqHdzV8IoYakz4tr5rhDHL4NAfXTh4ak",
    authDomain: "study-sesh-10dbf.firebaseapp.com",
    databaseURL: "https://study-sesh-10dbf.firebaseio.com",
    projectId: "study-sesh-10dbf",
    storageBucket: "study-sesh-10dbf.appspot.com",
    messagingSenderId: "527300603970",
    appId: "1:527300603970:web:d0cd1d4569892599"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        console.log("login complete")
        console.log(firebase.auth().currentUser)
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'https://kevinfasc6.github.io/StudySesh/index',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,

    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  ui.start('#firebaseui-auth-container', uiConfig);

  // Temp variable to hold the anonymous user data if needed.
var data = null;
// Hold a reference to the anonymous current user.