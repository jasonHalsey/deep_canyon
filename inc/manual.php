<script type="text/javascript">
  // var siteLat = '<?php echo $siteLat ?>';
  // var siteLong = '<?php echo $siteLong ?>';
  // var zoomLevel = '<?php echo $zoomLevel ?>';
  var siteLat;
  var siteLong;
  var zoomLevel;

window.onload = function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://www.confluenceflyshop.com/wp-json/wp/v2/report/32');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var data = JSON.parse(ourRequest.responseText);
      var response = createVars(data);
  
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
        siteLat: postsData.cmb2.report_metabox._cmb2_siteLat,
        siteLong : postsData.cmb2.report_metabox._cmb2_siteLong,
        zoomLevel : postsData.cmb2.report_metabox._cmb2_zoomLevel,
    }
 }
console.log(siteLat);
</script>