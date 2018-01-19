


$(document).on("click", "#callButton", function (){

  // $("#divID").empty();

  // var queryTerm = $(this).data("searchTerm");

// This next bit lacks a small structural element, yet. It seems a matter of HTML or CSS, really. This is the in-window placement of the associated rating in relation to each GIF image.

  $.ajax({
        url: "https://api.edamam.com/search?q=" + queryTerm + "",
        method: "get"
      })

      .done(function(response) {

        console.log(response);
      };