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
    if (empty($usgs_site)) {
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
  <section class="river_title">
    <h1><?php the_title() ?></h1>
  </section>

  <div class="sliding_content_container row">
    <section class="module content">
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
                    if (!empty($usgs_site)) {
                  ?>
                    <li class="list-group-item ">River Gauge:&nbsp;<span class="sitename">Loading...</span></li>
                    <li class="list-group-item ">Flow:&nbsp;<span class="flowNum">Loading...</span></li>
                    <li class="list-group-item ">Recorded At:&nbsp;<span class="createTime">Loading...</span></li>
                  <?php
                    } elseif (!empty($crooked_river)){ ?>
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
          </div>
              
          <div class="large-4 medium-4 columns sidebar"> 
            <h3>Targeted Species</h3>                     
            <ul id="the_species_list" class="species_list">
              
            </ul> 

            <h3>Current Hatches</h3>                     
            <ul id="the_hatch_list">

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