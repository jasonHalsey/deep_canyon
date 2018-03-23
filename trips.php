<?php
/*
Template Name: trip template
*/
  get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>



	<section id="main_header_image" class="fixed_img_container">
		<img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>" />
	</section>
	<section id="the_river_title" class="river_title">
		 <h1><?php the_title() ?></h1>
	</section>


	<div class="sliding_content_container row">

		<section class="module content report_page_content">
			<div class="container">
				<?php the_content(); ?>
			</div>
		</section>
	</div>
<?php endwhile; ?>

<?php get_footer(); ?>




