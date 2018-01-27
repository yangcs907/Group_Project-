$(document).ready(function() {
  // <script src="Chart.bundle.min.js"></script>

  var newestData;

  function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
  };

  function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
      });
      chart.update();
  };

  function updateChart() {
      var newestData = [retrCarbData, retrProData, retrFatData, retrSatFatData, retrFiberData];

      var ourLabels = ["Carbs", "Protein", "Total Fat", "Saturated Fat", "Fiber"];
      
      ourLabels.forEach(function(label){
        removeData(theChart);
        });

      // for (j = 0; j < ourLabels.length; j++) {
      //   removeData(theChart);
      // };

      for (i = 0; i < ourLabels.length; i++) {
        addData (theChart, ourLabels[i], newestData[i]);
      };

    // theChart.update ();

    };

    function saveLocal(resp) {
      console.log(resp);
      localStorage.setItem('ourData', JSON.stringify(resp));
      localStorage.setItem(
        'carbDataLS',
        JSON.stringify(resp.hits[0].recipe.totalDaily.CHOCDF.quantity)
      );
      localStorage.setItem(
        'proDataLS',
        JSON.stringify(resp.hits[0].recipe.totalDaily.PROCNT.quantity)
      );
      localStorage.setItem(
        'fatDataLS',
        JSON.stringify(resp.hits[0].recipe.totalDaily.FAT.quantity)
      );
      localStorage.setItem(
        'satFatDataLS',
        JSON.stringify(resp.hits[0].recipe.totalDaily.FASAT.quantity)
      );
      localStorage.setItem(
        'fiberDataLS',
        JSON.stringify(resp.hits[0].recipe.totalDaily.FIBTG.quantity));

        // theChart.data.datasets.data = [retrCarbData, retrProData, retrFatData, retrSatFatData,retrFiberData];
      // newestData = [];
      // theChart.data.datasets.data = newestData

      // theChart.config.data =  (theChart.data.datasets.data)
      // theChart.update ();
      // console.log(theChart.data.datasets.data);
      

      retrData = JSON.parse(localStorage.getItem('ourData'));

      console.log(retrData);

      var recipeName = JSON.stringify(retrData.hits[0].recipe.label);

      var edURL = JSON.stringify(retrData.hits[0].recipe.uri);

      console.log(edURL);

      var exURL = JSON.stringify(retrData.hits[0].recipe.url);

      console.log(exURL);

      var carbData = JSON.stringify(
        retrData.hits[0].recipe.totalDaily.CHOCDF.quantity
      );

      console.log(carbData);
      var proData = JSON.stringify(
        retrData.hits[0].recipe.totalDaily.PROCNT.quantity
      );

      var fatData = JSON.stringify(
        retrData.hits[0].recipe.totalDaily.FAT.quantity
      );

      var satFatData = JSON.stringify(
        retrData.hits[0].recipe.totalDaily.FASAT.quantity
      );

      var fiberData = JSON.stringify(
        retrData.hits[0].recipe.totalDaily.FIBTG.quantity
      );

      // for each in [carbData, proData, fatData, fatSatData, fiberData] {
      //   var newDiv = $("<div>");
      //   newDiv.text()
      // }
      $('#thisHere').append('Carbohydrates: ' + carbData);
      $('#thisHere').append('Protein: ' + proData);
      $('#thisHere').append('Total Fat: ' + fatData);
      $('#thisHere').append('Saturated Fat: ' + satFatData);
      $('#thisHere').append('Fiber: ' + fiberData);

      updateChart();
    };

  $('#findIngr').on('click', function(event) {
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    $("#thisHere").empty();
    // Here we grab the text from the input box
    var ingredient = $('#ingr-input')
      .val()
      .trim();

    var appId = '015a1dc7';
    // "36c66d3a"

    var appKey = '16bab94aee14b5881f28798e788c26e0';
    // "8be8dd8b6a6f98a5221770fcb1d2f043"
    // Here we construct our URL
    var queryURL =
      'https://api.edamam.com/search?q=' +
      ingredient +
      '&app_id=' +
      appId +
      '&app_key=' +
      appKey +
      '&from=0&to=1';
    // https://api.edamam.com/search?app_id=yourappid&app_key=yourappkey&q=butter&diet=low-carb&diet=high-protein

    var retrData;

    // theChart.update ();

    // =====================================================
    // =====================================================
    $.ajax({
      // xhrFields: {cors: false},
      url: queryURL,
      method: 'GET'
    }).done(saveLocal);

    // var retrData = JSON.parse(localStorage.getItem('ourData'));
  });
  var retrCarbData = localStorage.getItem('carbDataLS');
  // console.log(retrCarbData + "THIS");
  var retrProData = localStorage.getItem('proDataLS');
  var retrFatData = localStorage.getItem('fatDataLS');
  var retrSatFatData = localStorage.getItem('satFatDataLS');
  var retrFiberData = localStorage.getItem('fiberDataLS');
  // var nutrUSDA = $("#nutrChart");
  var ctx = document.getElementById('nutrChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Times';
  Chart.defaults.global.defaultFontColor = 'grey';
  var theChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Carbs', 'Protein', 'Fat', 'Saturated Fat', 'Fiber'],
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
      datasets: [
        {
          label: 'Percentage by Nutrient',
          data: [
            retrCarbData,
            retrProData,
            retrFatData,
            retrSatFatData,
            retrFiberData
          ],
          backgroundColor: ['red', 'blue', 'yellow', 'purple', 'green'],
          borderColor: '#777',
          hoverBorderWidth: 4,
          hoverBorderColor: 'cyan'
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'USDA Recommended Daily Consumption (%)',
        fontSize: 20
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              suggestedMin: 0,
              suggestedMax: 40,
              stepSize: 10
            }
          }
        ]
      }
    }



  });



  // removeData(theChart);
  // removeData(theChart);
  // removeData(theChart);
  // removeData(theChart);
  // removeData(theChart);


  // ourLabels.forEach(addData (theChart, index?)){

  // };

  // addData(theChart, "Carbs", retrCarbData);
  // addData(theChart, "Protein", retrProData);
  // addData(theChart, "Total Fat", retrFatData);
  // addData(theChart, "Saturated Fat", retrSatFatData);
  // addData(theChart, "Fiber", retrFiberData);


// for (i = 0; i < ourLabels.length; i++) {
//   addData (theChart, ourLabels[i], newestData[i]);
// };

  

//   addData(theChart, ourLabels, newestData);

  // theChart.update();

});