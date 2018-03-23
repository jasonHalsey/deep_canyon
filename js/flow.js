jQuery(document).ready(function(){
  L.mapbox.accessToken = 'pk.eyJ1IjoiamFzb25oYWxzZXkiLCJhIjoiY2lrZm5oOWh3MDAxeHUza2w5MnM2aHdzYSJ9.WXf_OK1N34LKLlkBHCt_9w';
});


window.onload = function(){
// function gather_api() { 
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://www.confluenceflyshop.com/wp-json/wp/v2/report/' + pageId + '');
  ourRequest.onload = function() {

    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var data = JSON.parse(ourRequest.responseText);
      var response = createVars(data);
      // var flowLat = response.siteLat;
      // var flowLong = response.siteLong;
      var usgsNumber = response.usgsNumber;
      var zoomLevel = response.zoomLevel || 18;
      var bgimage = response.bgimage;
      var subTitle = response.subTitle;
      var riverReport = response.riverReport;
      var guideReport = response.guideReport;
      var modifiedDate = response.modifiedDate;
      var speciesList = response.speciesList;
      var hatchList = response.hatchList;
      var riverTitle = response.riverTitle;

      console.log(hatchList);
      initialise(usgsNumber, zoomLevel, bgimage, subTitle, riverReport, guideReport, modifiedDate, speciesList, hatchList, riverTitle);
  
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  
}

function createVars(postsData) {
    return {
        usgsNumber : postsData.cmb2.report_metabox._cmb2_siteNum,
        zoomLevel : postsData.cmb2.report_metabox._cmb2_zoomLevel,
        bgimage : postsData.cmb2.report_metabox._cmb2_report_image,
        subTitle : postsData.cmb2.report_metabox._cmb2_sub_title,
        riverReport : postsData.cmb2.report_metabox._cmb2_river_description,
        guideReport : postsData.cmb2.report_metabox._cmb2_guide_report,
        modifiedDate : postsData.modified,
        speciesList : postsData.cmb2.report_metabox._cmb2_species_multicheckbox,
        hatchList : postsData.cmb2.report_metabox._cmb2_hatches_multicheckbox,
        riverTitle : postsData.title.rendered,
    }
 }



function initialise (usgsNumber, zoomLevel, bgimage, subTitle, riverReport, guideReport, modifiedDate, speciesList, hatchList, riverTitle) {

  var flowAPI = 'https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=' + usgsNumber + '&parameterCd=00060,00065&siteType=ST';

  //Populate Additional Content
  var imageContainer = document.getElementById("main_header_image");
  var subTitleContain = document.getElementById("area_sub_title");
  var guideReportContain = document.getElementById("guide_report");
  var riverReportContain = document.getElementById("river_report");
  var speciesListContain = document.getElementById("the_species_list");
  var hatchListContain = document.getElementById("the_hatch_list");
  var riverTitleContain = document.getElementById("the_river_title");
  var lowerRiverTitleContain = document.getElementById("lower_title");
  
  var imagePopHTML = '';
  var subTitlePopHTML = '';
  var riverReportPopHTML = '';
  var guideReportPopHTML = '';
  var titlePopHTML = '';

  imagePopHTML = '<section class="static_img_container" style="background-image:url(' + bgimage + ');"></section>';
  subTitlePopHTML = '<h3 class="river_sub_title">' + subTitle + '</h3>';
  riverReportPopHTML = '<p>' + riverReport + '</p>';
  guideReportPopHTML = '<p>' + guideReport + '</p>';
  titlePopHTML = '<h1>' + riverTitle + '</h1>';

  console.log(titlePopHTML);
  console.log(lowerRiverTitleContain);
  //Loop Through Targeted Species List
    var myObj, i, x = "";
      myObj = speciesList;

      for (i = 0; i < myObj.length; i++) {
        var speciesTitle = myObj[i].replace(/_|\d|-|\./g, ' ');
          x += '<li class="' + myObj[i] + 'species_box"><img src="' + templatePathDCO +'/images/species_' + myObj[i] + '.gif" /><h6 class="species_title">&mdash;&nbsp;' + speciesTitle + '&mdash;&nbsp;</h6></li>';
      }

  //Loop Through Hatch List
    var hatchObj, a, b = "";
      hatchObj = hatchList;

      for (a = 0; a < hatchObj.length; a++) {
        // var speciesTitle = hatchObj[i].replace(/_|\d|-|\./g, ' ');
          b += '<li class="hatch_box" />' + hatchObj[a] + '</li>';
      }

  // Replace conent of container elements with API generated content
  imageContainer.innerHTML = imagePopHTML;
  subTitleContain.innerHTML = subTitlePopHTML;
  riverReportContain.innerHTML = riverReportPopHTML;
  guideReportContain.innerHTML = guideReportPopHTML;
  riverTitleContain.innerHTML = titlePopHTML;
  lowerRiverTitleContain.innerHTML = titlePopHTML;
  speciesListContain.innerHTML = x;
  hatchListContain.innerHTML = b;
  
  console.log(modifiedDate);





















var zoomLevel = zoomLevel;
// var flowAPI = 'https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=' + usgsNumber + '&parameterCd=00060,00065&siteType=ST';
   
weatherFn = function(url) {
  jQuery.getJSON(url, function (json) {

    var dateCreate = json.creationDateLocal
    var weatherTime  = json.time.startPeriodName[0]
    var weatherText = json.data.text[0]
    var weatherWeather = json.data.weather[0]
    var weatherTemp = json.data.temperature[0]

    jQuery('.weather_date').text(dateCreate);
    jQuery('.weather_time').text(weatherTime);
    jQuery('.weather_temp').html(weatherTemp + '&deg;');
    jQuery('.weather_text').html(weatherText);
    jQuery('.weather_weather').text(weatherWeather);


    // Switch Weather Icons
    if ($.inArray(weatherWeather, ['Mostly Cloudy','Mostly Cloudy with Haze','Mostly Cloudy and Breezy']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud');
    }
    else if($.inArray(weatherWeather, ['Fair','Clear','Fair with Haze','Clear with Haze','Fair and Breezy','Clear and Breezy']) >= 0) {
      jQuery('#weather_icon').addClass('diw-sun');
    }
    else if($.inArray(weatherWeather, ['A Few Clouds','A Few Clouds with Haze','A Few Clouds and Breezy']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-sun');
    }
    else if($.inArray(weatherWeather, ['Partly Cloudy','Partly Cloudy with Haze','Partly Cloudy and Breezy']) >= 0) {
      jQuery('#weather_icon').addClass('diw-clouds-sun');
    }
    else if($.inArray(weatherWeather, ['Overcast','Overcast with Haze','Overcast and Breezy']) >= 0) {
      jQuery('#weather_icon').addClass('diw-clouds');
    }
    else if($.inArray(weatherWeather, ['Fog/Mist','Fog','Freezing Fog','Shallow Fog','Partial Fog','Patches of Fog','Fog in Vicinity','Freezing Fog in Vicinity','Shallow Fog in Vicinity','Partial Fog in Vicinity','Patches of Fog in Vicinity','Showers in Vicinity Fog','Light Freezing Fog','Heavy Freezing Fog']) >= 0) {
      jQuery('#weather_icon').addClass('diw-fog');
    }
    else if($.inArray(weatherWeather, ['Smoke']) >= 0) {
      jQuery('#weather_icon').addClass('diw-fog');
    }
    else if($.inArray(weatherWeather, ['Freezing Rain','Freezing Drizzle','Light Freezing Rain','Light Freezing Drizzle','Heavy Freezing Rain','Heavy Freezing Drizzle','Freezing Rain in Vicinity','Freezing Drizzle in Vicinity']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-hail');
    }
    else if($.inArray(weatherWeather, ['Ice Pellets','Light Ice Pellets','Heavy Ice Pellets','Ice Pellets in Vicinity','Showers Ice Pellets','Thunderstorm Ice Pellets','Ice Crystals','Hail','Small Hail/Snow Pellets','Light Small Hail/Snow Pellets','Heavy small Hail/Snow Pellets','Showers Hail','Hail Showers']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-cloud-hail');
    }
    else if($.inArray(weatherWeather, ['Freezing Rain Snow','Light Freezing Rain Snow','Heavy Freezing Rain Snow','Freezing Drizzle Snow','Light Freezing Drizzle Snow','Patchy Freezing Fog','Heavy Freezing Drizzle Snow','Snow Freezing Rain','Light Snow Freezing Rain','Heavy Snow Freezing Rain','Snow Freezing Drizzle','Light Snow Freezing Drizzle','Heavy Snow Freezing Drizzle']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-hail');
    }
    else if($.inArray(weatherWeather, ['Rain Ice Pellets','Light Rain Ice Pellets','Heavy Rain Ice Pellets','Drizzle Ice Pellets','Light Drizzle Ice Pellets','Heavy Drizzle Ice Pellets','Ice Pellets Rain','Light Ice Pellets Rain','Heavy Ice Pellets Rain','Ice Pellets Drizzle','Light Ice Pellets Drizzle','Heavy Ice Pellets Drizzle']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-hail');
    }
    else if($.inArray(weatherWeather, ['Rain Snow','Light Rain Snow','Heavy Rain Snow','Snow Rain','Light Snow Rain','Heavy Snow Rain','Drizzle Snow','Light Drizzle Snow','Heavy Drizzle Snow','Snow Drizzle','Light Snow Drizzle','Heavy Drizzle Snow']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-snow');
    }
    else if($.inArray(weatherWeather, ['Rain Showers','Light Rain Showers','Light Rain and Breezy','Heavy Rain Showers','Rain Showers in Vicinity','Light Showers Rain','Heavy Showers Rain','Showers Rain','Showers Rain in Vicinity','Rain Showers Fog/Mist','Light Rain Showers Fog/Mist','Heavy Rain Showers Fog/Mist','Rain Showers in Vicinity Fog/Mist','Light Showers Rain Fog/Mist','Heavy Showers Rain Fog/Mist','Showers Rain Fog/Mist','Showers Rain in Vicinity Fog/Mist']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-snow');
    }
    else if($.inArray(weatherWeather, ['Thunderstorm','Thunderstorm Rain','Light Thunderstorm Rain','Heavy Thunderstorm Rain','Thunderstorm Rain Fog/Mist','Light Thunderstorm Rain Fog/Mist','Heavy Thunderstorm Rain Fog and Windy','Heavy Thunderstorm Rain Fog/Mist','Thunderstorm Showers in Vicinity','Light Thunderstorm Rain Haze','Heavy Thunderstorm Rain Haze','Thunderstorm Fog','Light Thunderstorm Rain Fog','Heavy Thunderstorm Rain Fog','Thunderstorm Light Rain','Thunderstorm Heavy Rain','Thunderstorm Rain Fog/Mist','Thunderstorm Light Rain Fog/Mist','Thunderstorm Heavy Rain Fog/Mist','Thunderstorm in Vicinity Fog/Mist','Thunderstorm Showers in Vicinity','Thunderstorm in Vicinity Haze','Thunderstorm Haze in Vicinity','Thunderstorm Light Rain Haze','Thunderstorm Heavy Rain Haze','Thunderstorm Fog','Thunderstorm Light Rain Fog','Thunderstorm Heavy Rain Fog','Thunderstorm Hail','Light Thunderstorm Rain Hail','Heavy Thunderstorm Rain Hail','Thunderstorm Rain Hail Fog/Mist','Light Thunderstorm Rain Hail Fog/Mist','Heavy Thunderstorm Rain Hail Fog/Hail','Thunderstorm Showers in Vicinity Hail','Light Thunderstorm Rain Hail Haze','Heavy Thunderstorm Rain Hail Haze','Thunderstorm Hail Fog','Light Thunderstorm Rain Hail Fog','Heavy Thunderstorm Rain Hail Fog','Thunderstorm Light Rain Hail','Thunderstorm Heavy Rain Hail','Thunderstorm Rain Hail Fog/Mist','Thunderstorm Light Rain Hail Fog/Mist','Thunderstorm Heavy Rain Hail Fog/Mist','Thunderstorm in Vicinity Hail','Thunderstorm in Vicinity Hail Haze','Thunderstorm Haze in Vicinity Hail','Thunderstorm Light Rain Hail Haze','Thunderstorm Heavy Rain Hail Haze','Thunderstorm Hail Fog','Thunderstorm Light Rain Hail Fog','Thunderstorm Heavy Rain Hail Fog','Thunderstorm Small Hail/Snow Pellets','Thunderstorm Rain Small Hail/Snow Pellets','Light Thunderstorm Rain Small Hail/Snow Pellets','Heavy Thunderstorm Rain Small Hail/Snow Pellets']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-lightning');
    }
    else if($.inArray(weatherWeather, ['Snow','Light Snow','Heavy Snow','Snow Showers','Light Snow Showers','Heavy Snow Showers','Showers Snow','Light Showers Snow','Heavy Showers Snow','Snow Fog/Mist','Light Snow Fog/Mist','Heavy Snow Fog/Mist','Snow Showers Fog/Mist','Light Snow Showers Fog/Mist','Heavy Snow Showers Fog/Mist','Showers Snow Fog/Mist','Light Showers Snow Fog/Mist','Heavy Showers Snow Fog/Mist','Snow Fog','Light Snow Fog','Heavy Snow Fog','Snow Showers Fog','Light Snow Showers Fog','Heavy Snow Showers Fog','Showers Snow Fog','Light Showers Snow Fog','Heavy Showers Snow Fog','Showers in Vicinity Snow','Snow Showers in Vicinity','Snow Showers in Vicinity Fog/Mist','Snow Showers in Vicinity Fog','Low Drifting Snow','Blowing Snow','Snow Low Drifting Snow','Snow Blowing Snow','Light Snow Low Drifting Snow','Light Snow Blowing Snow','Light Snow Blowing Snow Fog/Mist','Heavy Snow Low Drifting Snow','Heavy Snow Blowing Snow','Thunderstorm Snow','Light Thunderstorm Snow','Heavy Thunderstorm Snow','Snow Grains','Light Snow Grains','Heavy Snow Grains','Heavy Blowing Snow','Blowing Snow in Vicinity']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-snow');
    }
    else if($.inArray(weatherWeather, ['Windy','Breezy','Fair and Windy','A Few Clouds and Windy','Partly Cloudy and Windy','Mostly Cloudy and Windy','Overcast and Windy']) >= 0) {
      jQuery('#weather_icon').addClass('diw-wind');
    }
    else if($.inArray(weatherWeather, ['Showers','Showers in Vicinity','Scattered Showers','Showers in Vicinity Fog/Mist','Showers in Vicinity Fog','Showers in Vicinity Haze']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-drizzle');
    }
    else if($.inArray(weatherWeather, ['Thunderstorm in Vicinity','Thunderstorm in Vicinity Fog','Thunderstorm in Vicinity Haze']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-lightning-sun');
    }
    else if($.inArray(weatherWeather, ['Light Rain','Drizzle','Light Drizzle','Heavy Drizzle','Light Rain Fog/Mist','Drizzle Fog/Mist','Light Drizzle Fog/Mist','Heavy Drizzle Fog/Mist','Light Rain Fog','Drizzle Fog','Light Drizzle Fog','Heavy Drizzle Fog']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-rain-2');
    }
    else if($.inArray(weatherWeather, ['Rain','Heavy Rain','Rain Fog/Mist','Heavy Rain Fog/Mist','Rain Fog','Heavy Rain Fog']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-rain');
    }
    else if($.inArray(weatherWeather, ['Funnel Cloud','Funnel Cloud in Vicinity','Tornado/Water Spout']) >= 0) {
      jQuery('#weather_icon').addClass('diw-tornado');
    }
    else if($.inArray(weatherWeather, ['Dust','Low Drifting Dust','Blowing Dust','Sand','Blowing Sand','Low Drifting Sand','Dust/Sand Whirls','Dust/Sand Whirls in Vicinity','Dust Storm','Heavy Dust Storm','Dust Storm in Vicinity','Sand Storm','Heavy Sand Storm','Sand Storm in Vicinity']) >= 0) {
      jQuery('#weather_icon').addClass('diw-wind');
    }
    else if($.inArray(weatherWeather, ['Haze']) >= 0) {
      jQuery('#weather_icon').addClass('diw-fog');
    }
    else if($.inArray(weatherWeather, ['Sunny and Breezy','Mostly Sunny and Breezy']) >= 0) {
      jQuery('#weather_icon').addClass('diw-cloud-wind-sun');
    }
    else {
      jQuery('#weather_icon').addClass('diw-sun')
    }
  })
}

jQuery.getJSON(flowAPI, function (json) {

 
  var baseString = json.value.timeSeries[0]
  var createTime = baseString.values[0].value[0].dateTime
  var locationName = baseString.sourceInfo.siteName
  var flowNum = baseString.values[0].value[0].value
  var flowLat = baseString.sourceInfo.geoLocation.geogLocation.latitude
  var flowLong = baseString.sourceInfo.geoLocation.geogLocation.longitude
  var extendedWeather = ('<a href="https://forecast.weather.gov/MapClick.php?lat=' + flowLat + '&lon=' + flowLong + '#.V1jqUsfCTzI" target="_blank">See Extended NOAA Forecast</a>');
  var extendedFlow = ('<a href="http://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=' + usgsNumber + '&parm_cd=00060&period=7" target="_blank">See Extended Flow Chart</a>');
  weatherFn("https://forecast.weather.gov/MapClick.php?lat=" + flowLat + "&lon=" + flowLong + "&FcstType=json");
  var map = L.mapbox.map('map-one', 'mapbox.satellite').setView([flowLat,flowLong], zoomLevel);
  var url = "https://forecast.weather.gov/MapClick.php?lat=" + flowLat + "&lon=" + flowLong + "&FcstType=json"


  // if(flowNum == null){ 
  //   var flowLat = siteLat
  //   var flowLong = siteLong
  // }else{
  //   var flowLat = baseString.sourceInfo.geoLocation.geogLocation.latitude
  //   var flowLong = baseString.sourceInfo.geoLocation.geogLocation.longitude
  // };
 
 // Disable drag and zoom handlers.
  // map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  map.keyboard.disable();

  // Disable tap handler, if present.
  if (map.tap) map.tap.disable();

  // Convert USGS Time Recorded to Readable Format
  var day = moment(createTime).format('MMMM Do YYYY, h:mm a');

  // Take River Report Location Name a Combine For Title Styling
  var str = locationName;
  function getWords(str) {
    return str.split(/\s+/).slice(0,2).join(" ");
  }

  L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [
            flowLong,
            flowLat
          ]
      },
      properties: {
          title: locationName,
          description: 'Flow: ' + flowNum + ' ft3/s',
          'marker-size': 'large',
          'marker-color': '#BE9A6B',
          'marker-symbol': 'water'
      }
  }).addTo(map);

    jQuery( "div.noaa_link" ).html( extendedWeather );
    jQuery( "div.usgs_link" ).html( extendedFlow );

    jQuery('.usgs_river_name').html(getWords(str));
    jQuery('.createTime').text(day);
    jQuery('.sitename').text(locationName);
    jQuery('.flowNum').html
    (flowNum + '&nbsp;cfs');


    if(flowNum >= 4700) {
      jQuery('#gauge').addClass('success');
    }
})

  var elemSpin = document.querySelector('#spin-loader');
  elemSpin.style.display = 'none';

  var imageContainer = document.getElementById("loaded-content");
  imageContainer.classList.remove('fade-out');

}