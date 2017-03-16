// var firebase = require('firebase')
//
//
// var config = {
//     apiKey: "AIzaSyDFbW0Y_BGL7Vh1p38_JuIQt6mflHF8sCw",
//     authDomain: "socket-1f0ea.firebaseapp.com",
//     databaseURL: "https://socket-1f0ea.firebaseio.com",
//     storageBucket: "socket-1f0ea.appspot.com",
//     messagingSenderId: "28192469428"
//   };

// firebase.initializeApp(config);
// var database = firebase.database()

var starCountRef = firebase.database().ref('navigate');
starCountRef.on('value', function(snapshot) {
  if(snapshot.val().command == 'right' && !statusRight) {
    Reveal.next()
  } else if(snapshot.val().command == 'left' && !statusLeft) {
    Reveal.prev()
  }
  statusLeft = false
  statusRight = false
});
