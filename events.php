 <?php
/*
Template Name: Events
*/
  get_header();
?>
<section class="interior_hero river_archive_hero">
</section>

<div class="row small-up-1 medium-up-2 large-up-3 report_feed_container">

  <h3 class="page_title"><?php the_title();?></h3> 
  
  <h3 class="page_subtitle">Connection. Education. Conservation.</h3>

  <a class="icon-calendar class-nav"></a>

  <?php
    $mypost = array( 'post_type' => 'event','orderby' => 'menu_order');
    $loop = new WP_Query( $mypost );
  ?>
  <?php while ( $loop->have_posts() ) : $loop->the_post();?>
      <div class="class_container">          
        <h4><?php the_title() ?></h4>
        <p><?php echo wpautop(get_post_meta( $post->ID, '_cmb2_description', true )); ?></p>
        <p>Location:&nbsp;<?php echo get_post_meta( $post->ID, '_cmb2_location', true ); ?></p>
        <?php $event_reserve = get_post_meta( $post->ID, '_cmb2_cost', true ); 
          if($event_reserve === 'book_it'){
          ?>
          <a href="https://dco.theflybook.com/book" class="reserve_button">Book Online Now</a>
          <?php }else{ ?>
          <a href="#" class="reserve_button">Free Event</a>
          <?php
            }
          ?>
      </div>
  <?php endwhile; ?>
  <?php wp_reset_query(); ?>
  <div id="cal-top"></div>
  <?php echo do_shortcode("[ai1ec view='monthly']"); ?>
</div>
<?php get_footer(); ?>