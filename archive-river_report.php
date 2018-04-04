<?php
/*
Template Name: archive_river_report
*/
  get_header();
?>
<section class="interior_hero river_archive_hero">
</section>
<!-- TODO: Add Backgroungd Image Header -->
<div class="row small-up-1 medium-up-2 large-up-3 report_feed_container"> 
<h3 class="page_title"><?php the_title();?> and Lakes</h3> 
<h3 class="page_subtitle">The Latest Intel From The Guides On The Water</h3>  
  <?php

    $loop = new WP_Query(array(
      'posts_per_page' => 15,
      'category_name' => 'river_report', // this is the category SLUG
    ));
  ?>
  <?php while ( $loop->have_posts() ) : $loop->the_post();?>

      <div class="column">
        <div class="report_feed">
          <figure class="effect-oscar_report">
            <img src="<?php the_post_thumbnail(); ?>"/>
            <figcaption>
              <h2><?php the_title() ?></h2>
              <p><?php the_content() ?></p>
              <a href="<?php the_permalink(); ?>">View more</a>
            </figcaption>     
          </figure>
        </div>

      </div>

  <?php endwhile; ?>

  <?php wp_reset_query(); ?>
</div>
<?php get_footer(); ?>