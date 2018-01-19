var ingredient_1 = $("").val().trim();
var ingredient_2 = $("").val().trim();
var ingredient_3 = $("").val().trim();
var ingredient_4 = $("").val().trim();
var ingredient_5 = $("").val().trim();

function searchRecipes(ingredients) {
  var queryURL = ""
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function response) {


  }
}



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8tE8l_DBoyPfFaiRc5fYfZ6jBK9XrcSs",
    authDomain: "groupproject-1b84f.firebaseapp.com",
    databaseURL: "https://groupproject-1b84f.firebaseio.com",
    projectId: "groupproject-1b84f",
    storageBucket: "",
    messagingSenderId: "208222818748"
  };
  firebase.initializeApp(config);
