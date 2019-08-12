
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
var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('<your-privacy-policy-url>');
        }
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);