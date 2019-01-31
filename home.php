<?php
/*
Template Name: home
*/
get_header(); ?>

    <div class="hero_row">
      <div class="large-12 columns hero">
      <div class="logo">
        <img src="<?php echo bloginfo('template_directory'); ?>/images/deepcanyonvector_white_shadow.png" alt="Deep Canyon Outfitters"/>
      </div>
        <?php echo do_shortcode("[rev_slider alias='homeSlide']"); ?>
      </div>
      <!-- <div class="hero-arrow-down downarrow">
        <div class="chevron"></div>
      </div> -->
    </div>

    <div id="cta_row" class="row ctas_row">
      <div class="large-3 medium-6 small-12 columns first-col">
        <figure class="effect-oscar">
          <img src="<?php echo bloginfo('template_directory'); ?>/images/reports_bg_2.jpg" alt="Fishing Reports"/>
          <figcaption>
            <h2 class="long_h2">Fishing <span>Reports</span></h2>
            <p>Get the latest intel from our guides</p>
            <a href="<?php echo home_url( '/rivers' ); ?>">View more</a>
          </figcaption>     
        </figure>
      </div>
      <div class="large-3 medium-6 small-12 columns">
        <figure class="effect-oscar">
          <img src="<?php echo bloginfo('template_directory'); ?>/images/camping_cta.jpg" alt="Guided Trips"/>
          <figcaption>
            <h2>Camping <span>Trips</span></h2>
            <p>Book a trip to get your adventure started</p>
            <a href="<?php echo home_url( '/camping-trips' ); ?>">View more</a>
          </figcaption>     
        </figure>
      </div>

      <div class="large-3 medium-6 small-12 columns">
        <figure class="effect-oscar">
          <img src="<?php echo bloginfo('template_directory'); ?>/images/half_day_cta.jpg" alt="Half-Day Trips"/>
          <figcaption>
            <h2>Half Day<span>Trips</span></h2>
           <p>Book a trip to get your adventure started</p>
            <a href="<?php echo home_url( '/half-day-trips' ); ?>">View more</a>
          </figcaption>     
        </figure>
      </div>

      <div class="large-3 medium-6 small-12 columns">
        <figure class="effect-oscar">
          <img src="<?php echo bloginfo('template_directory'); ?>/images/full_day_cta.jpg" alt="Fishing Events"/>
          <figcaption>
            <h2 class="lng_title">Full Day<span>Trips</span></h2>
            <p>Book a trip to get your adventure started</p>
            <a href="<?php echo home_url( '/full-day' ); ?>">View more</a>
          </figcaption>     
        </figure>
      </div>
    </div>

<div class="row feed_row">
    <div class="feed_content">
    <?php 
      $id=111; 
      $post = get_post($id); 
      $content = apply_filters('the_content', $post->post_content); 
      echo $content;  
    ?>
  </div>
</div>


    
<div class="insta_footer">
  <?php if ( is_active_sidebar( 'instagram_footer_1' ) ) : ?>
          <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
            <?php dynamic_sidebar( 'instagram_footer_1' ); ?>
          </div><!-- #primary-sidebar -->
        <?php endif; ?>
</div>
<?php get_footer(); ?>
