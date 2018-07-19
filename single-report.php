<?php
/*
Template Name: river_report
*/
  get_header();
?>


<!--   <?php 
    $usgs_site = get_post_meta( $post->ID, '_cmb2_siteNum', true );
    $siteLat = get_post_meta( $post->ID, '_cmb2_siteLat', true );
    $siteLong = get_post_meta( $post->ID, '_cmb2_siteLong', true );
    $zoomLevelset = get_post_meta( $post->ID, '_cmb2_zoomLevel', true );
    $zoomLevel = $zoomLevelset ?: 18;
    $steelheadCount = get_post_meta( $post->ID, '_cmb2_bonn_steelhead', true );
    $hatches = get_post_meta( $post->ID, '_cmb2_hatches_multicheckbox', true );
    $hotFlies = get_post_meta( $post->ID, '_cmb2_fly_image', true );
    $subtitle = get_post_meta( $post->ID, '_cmb2_sub_title', true );
    $crooked_river = get_post_meta( $post->ID, '_cmb2_crooked_river', true );
  ?> -->

<?php

// scriptType = 1 has USGS Num;
// scriptType = 2 has NO USGS Num;
  if( is_page('middle-deschutes')){
    $report_id = 32;
    $scriptType = 2;
    $bookTitle = 'The Middle Deschutes River';
  } elseif( is_page('davis-lake')) {
     $report_id = 123;
     $scriptType = 2;
     $bookTitle = 'Davis Lake';
  } elseif( is_page('mckenzie-river')) {
     $report_id = 118;
     $scriptType = 1;
     $bookTitle = 'The McKenzie River';
  } elseif( is_page('crooked-river')) {
     $report_id = 115;
     $scriptType = 2;
     $bookTitle = 'The Crooked River';
  } elseif( is_page('lower-deschutes')) {
     $report_id = 34;
     $scriptType = 1;
     $bookTitle = 'The Lower Deschutes River';
  } elseif( is_page('east-lake')) {
     $report_id = 119;
     $scriptType = 2;
     $bookTitle = 'East Lake';
  } elseif( is_page('fall-river')) {
     $report_id = 120;
     $scriptType = 2;
     $bookTitle = 'The Fall River';
  } elseif( is_page('crane-prairie-reservoir')) {
     $report_id = 121;
     $scriptType = 2;
  } elseif( is_page('hosmer-lake')) {
     $report_id = 122;
     $scriptType = 2;
     $bookTitle = 'Hosmer Lake';
  } elseif( is_page('upper-deschutes-river')) {
     $report_id = 29;
     $scriptType = 2;
     $bookTitle = 'The Upper Deschutes River';
  } 
?>
  
  <?php
    if ($scriptType == 2) {
       include(locate_template('inc/manual.php'));
  ?>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/noFlow.js"></script>
  <?php
    }else{
      include(locate_template('inc/flow_js.php'));
  ?>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/flow.js"></script>
  <?php
    }
  ?>

<div id="spin-loader" class="spinner"></div>
<section id="loaded-content" class="fade-out">


    <section id="main_header_image" class="fixed_img_container">
    </section>
  <section id="the_river_title" class="river_title">
    </section>


  <div class="sliding_content_container row">
      
    <section class="module content report_page_content">
      <div class="container">
        <div class="large-8 medium-8 columns"> 
              <div class="card">
                
                <div class="card-block">
                 
                    <h2 id="lower_title"class="river_name"></h2>
                    <div id="area_sub_title"></div>
                   
                  <div id="river_report"></div>
                  <h3>Guide Report</h3>
                    <span><?php the_modified_date(); ?></span>
                  <div id="guide_report"></div>
                  <h3>Weather</h3>
                  <div id="weather_icon" class="card-img-top"> </div>
                  <p class="weather_text card-text">Loading...</p>
                </div>
                <ul class="list-group list-group-flush weather_block">
                  <li class="list-group-item weather_weather">Loading...</li>
                  <li class="list-group-item ">Temp:&nbsp;<span class="weather_temp">Loading...</span></li>
                  <?php
                   if ($scriptType == 1) {
                  ?>
                    <li class="list-group-item ">River Gauge:&nbsp;<span class="sitename">Loading...</span></li>
                    <li class="list-group-item ">Flow:&nbsp;<span class="flowNum">Loading...</span></li>
                    <li class="list-group-item ">Recorded At:&nbsp;<span class="createTime">Loading...</span></li>
                  <?php
                    } elseif ($report_id == 115){ ?>
                    <?php include(locate_template('inc/crooked_flow.php')); ?>
                  <?php
                    }
                  ?>
                  
                </ul>
                <div class="card-block map-block">
                  <div id='map-one' class='map'>Loading Map... </div>
                </div>
                <div class="extended_links card-block">
                  <div class="noaa_link"></div>
                  <div class="usgs_link"></div>
                </div>
              </div>
              <div class="book_trip_container">

               <?php if( get_field('btn_code_1') ): ?>
                   <?php the_field('btn_code_1'); ?>
                <?php endif; ?>
             
                <?php if( get_field('btn_code_2') ): ?>
                    <?php the_field('btn_code_2'); ?>
                <?php endif; ?>
              </div>
          </div>
              
          <div class="large-4 medium-4 columns sidebar"> 
            <h3>Targeted Species</h3>                     
            <ul id="the_species_list" class="species_list">
              
            </ul> 

            <h3>Current Hatches</h3>                     
            <ul id="the_hatch_list">
              <li>No Current Hatch Information</li>
            </ul>
  
           
            <?php 
              if (!empty($steelheadCount)){
            ?>

              <div id="rss-feeds">
                <h3>Steelhead Counts</h3>
                  <p>7 - Day Totals from Bonneville Dam</p>   
              </div>
              <p><a href="http://www.fpc.org/currentdaily/HistFishTwo_7day-ytd_Adults.htm" target="_blank">Full FPG Chart</a>
                  </p>
            <?php
              }
            ?>
          </div>
      </div>
    </section>
  </div>
</section> <!-- End Loaded Content -->

<?php get_footer(); ?>