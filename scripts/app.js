// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {

  $.ajax({
     method: 'GET',
     url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
     data: $('body').serialize(),
     dataType: 'JSON',
     success: onSubmitReqSuccess,
     complete: onComplete,
     error: onError
  }); //Ajax ends

  function onSubmitReqSuccess (responseData){
    console.log("Success!", responseData)
    var source = $('#info-template').html();
    var template = Handlebars.compile(source);
    // responseData.features.forEach(function(responseData){
    //     var earthquakeHtml = template({title : properties.title, time: properties.time});
    //     var paragraphString = "'<p>{{title}} + ' / ' + {{time}} + ' hours ago</p>'";
    //     $('#info').append(paragraphString)
    // })
  }
  function onComplete (){
    console.log("Completed!");
  };
  function onError (){
    console.log("Error!")
  };
});

//API Key for Google Maps = AIzaSyB4vSX9T4soW_LEStFBLKWOpKPQlZbCYmI
//JS API Key AIzaSyB4vSX9T4soW_LEStFBLKWOpKPQlZbCYmI
