$(document).ready(function() {

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
        $("#findIngr").on("click", function(event) {
          event.preventDefault();
          var myData = localStorage.getItem("favorites");
          database.ref().push(myData
          );
          console.log(favorites.image);
          console.log(favorites.recipe);
          console.log(myData);
          };
          // Code for handling the push


        });

        database.ref().on("child_added", function(childSnapshot, prevChildKey) {

          console.log(childSnapshot.val());

          var favorite = childSnapshot.val().myData;


          console.log(favorite);


          $("#favoritesDiv").append(favorite);

        });
      });