$("#findIngr").on("click", function(event) {

<<<<<<< HEAD
      $("#findIngr").on("click", function(event) {
        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();
        // Here we grab the text from the input box
        var ingredient = $("#ingr-input").val().trim();
        
        var appId = "015a1dc7"
        // "36c66d3a"
        
        var appKey = "16bab94aee14b5881f28798e788c26e0"
        // "8be8dd8b6a6f98a5221770fcb1d2f043"
        // Here we construct our URL
        var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=" + appId + "&app_key=" + appKey + "&from=0&to=1";
        // https://api.edamam.com/search?app_id=yourappid&app_key=yourappkey&q=butter&diet=low-carb&diet=high-protein
// =====================================================
// =====================================================
        $.ajax({
          // xhrFields: {cors: false},
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          var x = (JSON.stringify(response));
          var y = response;
          localStorage.setItem('ourData', JSON.stringify(response));
        });
        var retrData = JSON.parse(localStorage.getItem('ourData'));

        console.log(retrData);

        var recipeName = JSON.stringify(retrData.hits[0].recipe.label);

        var edURL = JSON.stringify(retrData.hits[0].recipe.uri);

        console.log (edURL);

        var exURL = JSON.stringify(retrData.hits[0].recipe.url);

        console.log (exURL);

        var carbData = JSON.stringify(retrData.hits[0].recipe.totalDaily.CHOCDF.quantity);
        localStorage.setItem('carbDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.CHOCDF.quantity));
        console.log(carbData);
        var proData = JSON.stringify(retrData.hits[0].recipe.totalDaily.PROCNT.quantity);
        localStorage.setItem('proDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.PROCNT.quantity));
        var fatData = JSON.stringify(retrData.hits[0].recipe.totalDaily.FAT.quantity);
        localStorage.setItem('fatDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.FAT.quantity));
        var satFatData = JSON.stringify(retrData.hits[0].recipe.totalDaily.FASAT.quantity);
        localStorage.setItem('satFatDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.FASAT.quantity));
        var fiberData = JSON.stringify(retrData.hits[0].recipe.totalDaily.FIBTG.quantity);
        localStorage.setItem('fiberDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.FIBTG.quantity)); 
        // for each in [carbData, proData, fatData, fatSatData, fiberData] {
        //   var newDiv = $("<div>");
        //   newDiv.text()
        // }
          $("#thisHere").append ("Carbohydrates: " + carbData);
          $("#thisHere").append ("Protein: " + proData);
          $("#thisHere").append ("Total Fat: " + fatData);
          $("#thisHere").append ("Saturated Fat: " + satFatData);
          $("#thisHere").append ("Fiber: " + fiberData);
          });
            var retrCarbData = localStorage.getItem('carbDataLS');
            // console.log(retrCarbData + "THIS");
            var retrProData = localStorage.getItem('proDataLS');
            var retrFatData = localStorage.getItem('fatDataLS');
            var retrSatFatData = localStorage.getItem('satFatDataLS');
            var retrFiberData = localStorage.getItem('fiberDataLS');
      var nutrUSDA = $("#nutrChart");
      Chart.defaults.global.defaultFontFamily = 'Times';
      Chart.defaults.global.defaultFontColor = 'grey';
      var theChart = new Chart(nutrUSDA, {
          type: 'bar',
          data: {
              labels: ["Carbs", "Protein", "Fat", "Saturated Fat", "Fiber"],
            // coded as CHOCDF, PROCNT, FAT, FASAT, FIBTG // in our Edamam JSON results
            // Carbohydrates, protein, fat, and fiber
            // are so-called 'macronutrients,'
            // fundamental characteristics of foods,
            // as noted by professional nutritionists,
            // and referenced in the pre-eminent academic
            // nutritional textbook 'Nutrition Now.'
            // They're also often referenced by the
            // National Institutes of Health, as
            // representing the most important
            // nutrient data.
              datasets: [{
                  label: 'Percentage by Nutrient',
                  data: [retrCarbData, retrProData, retrFatData, retrSatFatData, retrFiberData],
                  backgroundColor: [
                      'red',
                      'blue',
                      'yellow',
                      'purple',
                      'green',
                  ],
                  borderColor: '#777',
                  hoverBorderWidth: 4,
                  hoverBorderColor: 'cyan',
              }]
=======
        var recipe = $(this).attr("data-recipe");//

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var ingredient = $("#ingr-input").val().trim();
        
        var appId = "35f72116"
        
        var appKey = "f3dd5c58e168b6d60a6211c640e65b11"

        // Here we construct our URL
        var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=" + appId + "&app_key=" + appKey + "&from=0&to=3";

        
        $.ajax ({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          for(var x = 0; x < response.hits.length; x++) {

              console.log(response);
           
        

              // Retrieves the recipe image
        var recipe_img = response.hits[x].recipe.image; 

              console.log(recipe_img);

              //Retrieve recipe title
        var recipe_title =  response.hits[x].recipe.label; 

              console.log(recipe_title);

               var recipe_instr = response.hits[x].recipe.uri;

              console.log(recipe_instr);


              //Placing results in DOM
            
            // Creates a div to hold the recipe
              var newdiv = $('<div class="card-deck">'+'<div class="card results" >'+'<img class="card-img-top" src=' + recipe_img+' alt="Card image cap">' +'<div class="card-body">' + '<h5 class="card-title">'+recipe_title+'</h5>'+'</div>' );
              
              
          // Puts the entire Movie above the previous movies.
              $("#search-results").append(newdiv); 
            

              

            
            }
        })
 });
/*$("").on("click", function(event) {
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
    var ingredient_1 = $("#employee-name-input").val().trim();
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

    var favRecipe = function() {
      $.ajax({
        // xhrFields: {cors: false},
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
        var x = (JSON.stringify(response));
        var y = response;
        localStorage.setItem('ourData', JSON.stringify(response));
      });
      var retrData = JSON.parse(localStorage.getItem('ourData'));
      var carbData = JSON.stringify(retrData.hits[0].recipe.totalDaily.CHOCDF.quantity);
      localStorage.setItem('carbDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.PROCNT.quantity));
      console.log(carbData);
      var proData = JSON.stringify(retrData.hits[0].recipe.totalDaily.PROCNT.quantity);
      localStorage.setItem('proDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.PROCNT.quantity));
      var fatData = JSON.stringify(retrData.hits[0].recipe.totalDaily.FAT.quantity);
      localStorage.setItem('fatDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.FAT.quantity));
      var satFatData = JSON.stringify(retrData.hits[0].recipe.totalDaily.FASAT.quantity);
      localStorage.setItem('fatSatDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.FASAT.quantity));
      var fiberData = JSON.stringify(retrData.hits[0].recipe.totalDaily.FIBTG.quantity);
      localStorage.setItem('fiberDataLS', JSON.stringify(retrData.hits[0].recipe.totalDaily.FIBTG.quantity));
      // for each in [carbData, proData, fatData, fatSatData, fiberData] {
      //   var newDiv = $("<div>");
      //   newDiv.text()
      // }
        $("#thisHere").append ("Carbohydrates: " + carbData);
        $("#thisHere").append ("Protein: " + proData);
        $("#thisHere").append ("Total Fat: " + fatData);
        $("#thisHere").append ("Saturated Fat: " + satFatData);
        $("#thisHere").append ("Fiber: " + fiberData);
        /*})*/
        /*  var retrCarbData = localStorage.getItem('carbDataLS');
          console.log(retrCarbData + "THIS");
          var retrProData = localStorage.getItem('proDataLS');
          var retrFatData = localStorage.getItem('fatDataLS');
          var retrSatFatData = localStorage.getItem('satFatDataLS');
          var retrFiberData = localStorage.getItem('fiberDataLS');
    var nutrUSDA = $("#nutrChart");
    Chart.defaults.global.defaultFontFamily = 'Times';
    Chart.defaults.global.defaultFontColor = 'grey';
    var theChart = new Chart(nutrUSDA, {
        type: 'bar',
        data: {
            labels: ["Carbs", "Protein", "Fat", "Saturated Fat", "Fiber"],
          // coded as CHOCDF, PROCNT, FAT, FASAT, FIBTG // in our Edamam JSON results
          // Carbohydrates, protein, fat, and fiber
          // are so-called 'macronutrients,'
          // fundamental characteristics of foods,
          // as noted by professional nutritionists,
          // and referenced in the pre-eminent academic
          // nutritional textbook 'Nutrition Now.'
          // They're also often referenced by the
          // National Institutes of Health, as
          // representing the most important
          // nutrient data.
            datasets: [{
                label: 'Percentage by Nutrient',
                data: [retrCarbData, retrProData, retrFatData, retrSatFatData, retrFiberData],
                backgroundColor: [
                    'red',
                    'blue',
                    'yellow',
                    'purple',
                    'green',
                ],
                borderColor: '#777',
                hoverBorderWidth: 4,
                hoverBorderColor: 'cyan',
            }]
        },
        options: {
          title: {
            display: true,
            text:'USDA Recommended Daily Consumption (%)',
            fontSize: 20
            },
          legend: {
            display: false
>>>>>>> na-0118
          },
          options: {
            title: {
              display: true,
              text:'USDA Recommended Daily Consumption (%)',
              fontSize: 20
              },
            legend: {
              display: false
            },
<<<<<<< HEAD
            scales: {
                  xAxes: [{
                      ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40,
                        stepSize: 10
                      }
                  }],
              },
            },
          });
=======
          },
        });



    }
*/
>>>>>>> na-0118
