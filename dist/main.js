
var mainApp = {};
var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
    }
    else {
        uid =null
        document.location.href = "SignUp.html";
    }
  });

  function logOut(){
    firebase.auth().signOut();
       
  }

