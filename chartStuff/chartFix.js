$(document).ready(function () {
  var theChart;

  function getData() {
    return [
      JSON.parse(localStorage.getItem('carbDataLS')),
      JSON.parse(localStorage.getItem('proDataLS')),
      JSON.parse(localStorage.getItem('fatDataLS')),
      JSON.parse(localStorage.getItem('satFatDataLS')),
      JSON.parse(localStorage.getItem('fiberDataLS'))
    ];
  }

  function createChart() {
    var ctx = document.getElementById('nutrChart').getContext('2d');
    Chart.defaults.global.defaultFontFamily = 'Times';
    Chart.defaults.global.defaultFontColor = 'grey';

    theChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Carbs', 'Protein', 'Fat', 'Saturated Fat', 'Fiber'],
        datasets: [
          {
            label: 'Percentage by Nutrient',
            data: getData(),
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
    
  }

  function updateChart() {
    theChart.data.datasets.forEach((dataset) => {
      dataset.data = getData();
    });
    theChart.update();
  }

  function saveLocal(resp) {
    var carbData = resp.hits[0].recipe.totalDaily.CHOCDF ? resp.hits[0].recipe.totalDaily.CHOCDF.quantity : '';
    var proData = resp.hits[0].recipe.totalDaily.PROCNT ? resp.hits[0].recipe.totalDaily.PROCNT.quantity : '';
    var fatData = resp.hits[0].recipe.totalDaily.FAT ? resp.hits[0].recipe.totalDaily.FAT.quantity : '';
    var satFatData = resp.hits[0].recipe.totalDaily.FASAT ? resp.hits[0].recipe.totalDaily.FASAT.quantity : '';
    var fiberData = resp.hits[0].recipe.totalDaily.FIBTG ? resp.hits[0].recipe.totalDaily.FIBTG.quantity : '';

    localStorage.setItem(
      'carbDataLS',
      JSON.stringify(carbData)
    );
    localStorage.setItem(
      'proDataLS',
      JSON.stringify(proData)
    );
    localStorage.setItem(
      'fatDataLS',
      JSON.stringify(fatData)
    );
    localStorage.setItem(
      'satFatDataLS',
      JSON.stringify(satFatData)
    );
    localStorage.setItem(
      'fiberDataLS',
      JSON.stringify(fiberData));

    $('#thisHere').append('Carbohydrates: ' + carbData);
    $('#thisHere').append('Protein: ' + proData);
    $('#thisHere').append('Total Fat: ' + fatData);
    $('#thisHere').append('Saturated Fat: ' + satFatData);
    $('#thisHere').append('Fiber: ' + fiberData);

    updateChart();
  }

  $('#findIngr').on('click', function (event) {
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

    $.ajax({
      // xhrFields: {cors: false},
      url: queryURL,
      method: 'GET'
    }).done(saveLocal);

  });

  createChart();
});