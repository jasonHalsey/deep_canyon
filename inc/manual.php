<?php
  if( is_page('middle-deschutes')){
    $report_id = 32;
  } elseif( is_page('davis-lake')) {
     $report_id = 123;
  }
?>
<script type="text/javascript">
  // var siteLat = '<?php echo $siteLat ?>';
  // var siteLong = '<?php echo $siteLong ?>';
  // var zoomLevel = '<?php echo $zoomLevel ?>';
  var pageId = '<?php echo $report_id ?>';

</script>