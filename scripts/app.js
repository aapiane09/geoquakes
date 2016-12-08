// define globals


//USGS Earthquake data
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
//Grab USGS data
  $.ajax({
     method: 'GET',
     url: weekly_quakes_endpoint,
     data: $('body').serialize(),
     dataType: 'JSON',
     success: onSubmitReqSuccess,
     complete: onComplete,
     error: onError
  }); //Ajax ends

  function onSubmitReqSuccess (responseData){
    console.log("Success!", responseData)
    //Set up Handlebars
    var source = $('#info-template').html();
    var template = Handlebars.compile(source);
    //Convert time data and inject it into HTML document
    responseData.features.forEach(function(earthQ){
        var now = Date.now();
        var eqTime = earthQ.properties.time;
        var timeEquasion = (((now - eqTime)/86400000)*24);
        var earthquakeHtml = template({title : earthQ.properties.title, time: Math.round(timeEquasion)});
        $('#info').append(earthquakeHtml)
    })
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
