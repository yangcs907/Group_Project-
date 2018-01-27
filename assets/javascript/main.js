
// This .on("click") function will trigger the AJAX Call
      $("#findIngr").on("click", function(event) {

        var recipe = $(this).attr("data-recipe");//

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var ingredient = $("#ingr-input").val().trim();


        var appId = "36c66d3a"

        
        var appId = "36c66d3a"
        

        var appKey = "8be8dd8b6a6f98a5221770fcb1d2f043"

        // Here we construct our URL
        var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=" + appId + "&app_key=" + appKey + "&from=0&to=12";

        $.ajax ({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          var deckNumber = 0;
          for(var x = 0; x < response.hits.length; x++) {

            //declare a deck number
          var deckNumber = 0; 
          for(var x = 0; x < response.hits.length; x++) {
           
            //declare a deck number 
            //...and append it to the id of our current deck every 4 items:
            //use modulus (remainder operator) limit each deck to 4
            if (x % 4 == 0 ) {
              var cardDeck = $("<div class='card-deck row'" + " id='deck-" + deckNumber + "'" + "></div>");
              $("#search-results").append(cardDeck);
              deckNumber++;
            }

            // Retrieves the recipe image
            var recipe_img = response.hits[x].recipe.image;

            //Retrieve recipe title
            var recipe_title =  response.hits[x].recipe.label;

            //Recipe instruction link
            var recipe_instr = response.hits[x].recipe.url;

            //Placing results in DOM
            // Creates a div to hold the recipe
            var recipeCard = $('<a href=' + recipe_instr + '<div class="card results col-sm-3 col-lg-3 col-md-3" >'+
                                  '<img class="card-img-top" src=' + recipe_img + ' alt="Card image cap">'
                                 +'<div class="card-body">' +
                                    '<h5 class="card-title">' + recipe_title + '</h5>' +
                                  '</div>' +
                                '</div>' + '</a>');

            $("#deck-" + deckNumber).append(recipeCard);

            } 
            
            // Retrieves the recipe image
            var recipe_img = response.hits[x].recipe.image; 
            
            //Retrieve recipe title
            var recipe_title =  response.hits[x].recipe.label; 
            
            //Recipe instruction link
            var recipe_instr = response.hits[x].recipe.url;
            
            //Placing results in DOM
            // Creates a div to hold the recipe
            var recipeCard = $('<a href=' + recipe_instr + '<div class="card results col-sm-3 col-lg-3 col-md-3" >'+ 
                                  '<img class="card-img-top" src=' + recipe_img + ' alt="Card image cap">'
                                 +'<div class="card-body">' + 
                                    '<h5 class="card-title">' + recipe_title + '</h5>' + 
                                  '</div>' + 
                                '</div>' + '</a>');
           
            $("#deck-" + deckNumber).append(recipeCard); 
            
            //Add the src attr for recipe instructions url on each card
             recipeCard.attr('src', recipe_instr);
             recipeCard.addClass("food");
             recipeCard.attr("data-instr", "recipe");

               $(".food").click(function() {

                  var recipe_location = $(this).attr('src');

                   console.log(recipe_location);
              
                  var recipe_location = $(this).attr('src');
             
                   console.log(recipe_location); 





            })
          }


        })

      });
// Firebase code to work with html modal
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
      $(".btn-primary").on("click", function(event) {
        event.preventDefault();
        var name = $("#user_name").val().trim();
        var feedback = $("#feedback_text").val().trim();
        var user_feedback = {
          name: name,
          feedback: feedback
        };

        database.ref().push(user_feedback);

        console.log(user_feedback.name);
        console.log(user_feedback.feedback);
        console.log(user_feedback);
      });

      database.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

      var userName = childSnapshot.val().name;
      var userFeedback = childSnapshot.val().feedback;


      console.log(userName);
      console.log(userFeedback);
      $(".modal fade").hide();
      });
          
           
       /* })*/

     /* });*/
         
    
