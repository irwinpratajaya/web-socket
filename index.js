// var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyDFbW0Y_BGL7Vh1p38_JuIQt6mflHF8sCw",
    authDomain: "socket-1f0ea.firebaseapp.com",
    databaseURL: "https://socket-1f0ea.firebaseio.com",
    storageBucket: "socket-1f0ea.appspot.com",
    messagingSenderId: "28192469428"
  };

firebase.initializeApp(config);

var database = firebase.database()

firebase.database().ref('navigate').set({
    message: "abis di push lagi nih"
});
