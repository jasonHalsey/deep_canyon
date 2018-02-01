<?php
/*
Template Name: contact
*/
get_header(); ?>

<section class="static_img_container">
  <?php 
  foreach(get_images_src('large','false') as $k => $i){
    echo '<img src="'.$i[0].'">';
    }
?>

</section>


<div class="row contact_carrier">

  <div class="large-8 medium-8 columns">
    <div class="row">
      <div class="large-6 columns">
        <h2>Contact Us</h2>
          <h4>Address:</h4>
          <p>375 SW Powerhouse Dr Suite 100<br />Bend, OR 97702</p>
          <h4>Phone:</h4>
          <p><?php echo $GLOBALS['phone_number'] ?></p>
      </div>

      <div class="large-6 columns">
        <h2>Get In Touch</h2>
          <?php echo do_shortcode("[contact-form-7 id='68' title='contact_page']"); ?>        
      </div>
    </div>
    <div class="row">
      <div class="large-12 columns contact_map_container">
          <div id="map_shop_block">
            <?php include(locate_template('inc/contact_map.php'));?>
          </div><!-- End feed_block -->
      </div><!-- End large-12 -->
    </div><!-- End row -->
  </div><!-- End large-8 -->



  <div class="large-4 medium-4 columns">
    <h4>Upcoming Events</h4>
    <div class="callout">
      <?php echo do_shortcode("[ai1ec view='agenda']"); ?>
    </div><!-- End callout -->
    <h4>Reviews</h4>
      <div id='yelpwidget' class="callout">
      </div><!-- End yelpwidget -->
      <?php if ( is_active_sidebar( 'instagram_right_1' ) ) : ?>
          <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
            <?php dynamic_sidebar( 'instagram_right_1' ); ?>
          </div><!-- #primary-sidebar -->
        <?php endif; ?>
  </div><!-- End large-4 -->

</div><!-- End row -->

<div class="insta_footer">
  <?php if ( is_active_sidebar( 'instagram_footer_1' ) ) : ?>
          <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
            <?php dynamic_sidebar( 'instagram_footer_1' ); ?>
          </div><!-- #primary-sidebar -->
        <?php endif; ?>
</div>
<?php get_footer(); ?>
