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

<section class="fixed_img_container">
  <img src="<?php echo get_post_meta( $post->ID, '_cmb2_report_image', true ); ?>" />
</section>
<section class="river_title">
  <h1><?php the_title() ?><?php echo $report_id ?></h1>
</section>

<div class="sliding_content_container row">
  <section class="module content">
    <div class="container">
      <div class="large-8 medium-8 columns"> 
            <div class="card">
              
              <div class="card-block">
               
                  <h2 class="river_name"><?php the_title(); ?></h2>
                  <?php if (!empty($subtitle)){ ?>
                    <h3 class="river_sub_title"><?php echo $subtitle ?></h3> 
                  <?php } ?>
                 
                <?php echo wpautop(get_post_meta( $post->ID, '_cmb2_river_description', true )); ?>
                <h3>Guide Report</h3>
                  <span><?php the_modified_date(); ?></span>
                <p> <?php echo wpautop(get_post_meta( $post->ID, '_cmb2_guide_report', true )); ?></p>
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
          <ul class="species_list">
            <?php 
              $balls = get_post_meta( $post->ID, '_cmb2_species_multicheckbox', true );
              foreach($balls as $term): ?>
                <li class="<?php echo $term; ?> species_box">
                  <img src="<?php echo bloginfo('template_directory'); ?>/images/species_<?php echo $term?>.gif " />
                  <h6 class="species_title">&mdash;&nbsp;<?php include(locate_template('inc/species_title.php'));?>&nbsp;&mdash;</h6>
                </li>
            <?php endforeach; ?>
          </ul> 

          <?php
            if (!empty($hatches)) {
          ?>
          <h3>Current Hatches</h3>                     
          <ul class="hatch_list">
            <?php 
              foreach($hatches as $bugs): ?>
                <li class="<?php echo $bugs; ?> hatch_box">
                  <h5><?php echo $bugs; ?></h5>
                </li>
            <?php endforeach; ?>
          </ul>
          <?php } ?>
          <?php 
            if (!empty($hotFlies)) {
          ?>
          <h3>Hot Flies</h3>                     
          <dl class="accordion">
                <?php
                  $entrie_fly = get_post_meta( get_the_ID(), '_cmb2_fly_image', true ); 
                  foreach( $entrie_fly as $key => $person ) { 
                    foreach( $person as $attribute => $value ) {
                    $image = get_post($attribute);
                    $image_title = $image->post_title;
                    $image_shopify = $image->be_shopify_url;
                ?>
                
                  <dt><a href=""><?php echo($image_title); ?><span class="fly_btn icon-circle-down"></span></a></dt>
                  <?php 
                    if (!empty($image_shopify)) {
                  ?>
                  <dd>
                    <a href="<?php echo($image_shopify); ?>">
                      <img src="<?php echo $value ?>" class="hfly_image" />
                      <div class="overlay">
                        <div class="text">Buy It<br />Now</div>
                      </div>
                  </a></dd>
                  <?php }else { ?>
                  <dd><img src="<?php echo $value ?>" class="hfly_image" /></dd>
                  <?php } ?>
                <?php } }
                ?>
              </dl> 
          <?php
            }
          ?> 
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


<?php get_footer(); ?>