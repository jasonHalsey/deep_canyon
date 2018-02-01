<?php
/*
Template Name: single
*/
  get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
  <?php if ( is_single() ) : ?>

<section class="fixed_img_container">
  <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>" />
</section>
<section class="river_title">
  <h1><?php the_title() ?></h1>
</section>

<div class="sliding_content_container">



      <div class="row">
        <div class="large-12 columns">
          <div class="primary callout">
          <h1 class="main_title"><?php the_title(); ?></h1>

          <?php if (function_exists('custom_breadcrumbs')) custom_breadcrumbs(); ?>
            <p class="blog_author">By: <?php echo get_the_author_link(); ?> &nbsp;&mdash;&nbsp;
              <span class="entry-date"><?php echo get_the_date(); ?></span>
            </p>
            <p>
              <?php the_content(); ?>
            </p>
            <p>
              <?php echo do_shortcode("[sgmb id=1]"); ?>
            </p>
          </div>
        </div>
      </div>
 

  <?php endif; // is_single() ?>
 <?php endwhile; ?>
</div>

<?php get_footer(); ?>