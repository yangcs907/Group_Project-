var config = {
  apiKey: "AIzaSyC8tE8l_DBoyPfFaiRc5fYfZ6jBK9XrcSs",
  authDomain: "groupproject-1b84f.firebaseapp.com",
  databaseURL: "https://groupproject-1b84f.firebaseio.com",
  projectId: "groupproject-1b84f",
  storageBucket: "",
  messagingSenderId: "208222818748"
};
firebase.initializeApp(config);

var database = firebase.database();

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();
  var name = $("#user_name").val().trim();
  var feedback = $("#feedback").val().trim();
  var user_feedback = {
    name: name,
    feedback: feedback
  };

  database.ref().push(user_feedback);

  console.log(user_feedback.name);
  console.log(user_feedback.feedback);
  console.log(user_feedback);
});
