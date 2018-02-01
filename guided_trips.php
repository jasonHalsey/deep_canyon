<?php
/*
Template Name: guided trips
*/
  get_header();
?>
<section class="interior_hero river_archive_hero">
  
</section>
<!-- TODO: Add Backgroungd Image Header  -->
<div class="row">
  <h3 class="page_title"><?php the_title();?></h3> 
  <h3 class="page_subtitle">Book Your Adventure Today</h3>
</div>
<div class="row">  
  <div id='EmbeddedGrid' class='flybook-embedded-grid'></div><style>.flybook-embedded-grid iframe { height: 900px; width: 100%}</style><link rel='stylesheet' href='https://go.theflybook.com/Content/FrontEnd/front_end.css'/><script src='https://go.theflybook.com/custom/frontend/scheduler/scheduler_bootstrapper.js'></script><script>new Scheduler({accountId:122,targetId:'EmbeddedGrid',domain:'go.theflybook.com',protocol:'https'});</script>
</div>

<div class="insta_footer">
  <?php if ( is_active_sidebar( 'instagram_footer_1' ) ) : ?>
          <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
            <?php dynamic_sidebar( 'instagram_footer_1' ); ?>
          </div><!-- #primary-sidebar -->
        <?php endif; ?>
</div>
<?php get_footer(); ?>