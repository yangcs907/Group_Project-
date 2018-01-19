
function searchRecipes(one, two, three, four, five) {
  var queryURL = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${015a1dc7}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);


  }
};

$("").on("click", function(event) {
  event.preventDefault();
  var ingredient_1 = $("").val().trim();
  var ingredient_2 = $("").val().trim();
  var ingredient_3 = $("").val().trim();
  var ingredient_4 = $("").val().trim();
  var ingredient_5 = $("").val().trim();

  searchRecipes(ingredient_1, ingredient_2, ingredient_3, ingredient_4, ingredient_5);
});


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

  var database = firebase.database();

  $("").on("click", function(event) {
    event.preventDefault();
    var ingredient_1 = $("").val().trim();
    var ingredient_2 = $("").val().trim();
    var ingredient_3 = $("").val().trim();
    var ingredient_4 = $("").val().trim();
    var ingredient_5 = $("").val().trim();

    var ingredients = {
      ingredient_1: ingredient_1,
      ingredient_2: ingredient_2,
      ingredient_3: ingredient_3,
      ingredient_4: ingredient_4,
      ingredient_5: ingredient_5
    };


    database.ref().push(ingredients);

    console.log(ingredients.ingredient_1);
    console.log(ingredients.ingredient_2);
    console.log(ingredients.ingredient_3);
    console.log(ingredients.ingredient_4);
    console.log(ingredients.ingredient_5);


    });

    dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().ingredient_1);
      console.log(childSnapshot.val().ingredient_2);
      console.log(childSnapshot.val().ingredient_3);
      console.log(childSnapshot.val().ingredient_4);
      console.log(childSnapshot.val().ingredient_5);

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
