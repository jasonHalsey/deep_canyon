<?php
  if( is_page('middle-deschutes')){
    $report_id = 32;
  } elseif( is_page('davis-lake')) {
     $report_id = 123;
  } elseif( is_page('mckenzie-river')) {
     $report_id = 118;
  }
?>
<script type="text/javascript">
  var pageId = '<?php echo $report_id ?>';
  var templatePathDCO = '<?php echo bloginfo("template_directory"); ?>';
</script>