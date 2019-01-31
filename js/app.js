
jQuery(window).on("load", function() {
  // pageContentOffset();
});


jQuery(document).ready(function() {





jQuery('.staff_img_jared-burton').attr('src', globalObject.url + '/wp-content/uploads/2018/03/jared_lg.jpg').load(function() {  
   pageContentOffset();

});




// jQuery('.staff_img_jared-burton').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/jared_lg.jpg').load(function() {  
//    pageContentOffset();

// });
jQuery('.staff_img_tye-krueger').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/tye_lg.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_andy-maphet').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/Andy-lg.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_toby-nolan').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/toby_lg.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_jake-peet').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/walk-in-trip-header.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_reid-curry').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/reid_lg.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_landon-mace').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/landon_lg.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_brendan-cushen').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/brendan_lg.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_jeremiah-houle').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/jeremiah_lg.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.staff_img_michael-divita').attr('src', 'http://confluencefly.wpengine.com/wp-content/uploads/2018/03/mike_lg.jpg').load(function() {  
   pageContentOffset();

});

jQuery('.trip_header_full-day').attr('src', 'http://www.deepcanyonoutfitters.com/wp-content/uploads/2018/03/full-day-trip-header.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.trip_header_half-day-trips').attr('src', 'http://www.deepcanyonoutfitters.com/wp-content/uploads/2018/07/half_day_header.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.trip_header_camping-trips').attr('src', 'http://www.deepcanyonoutfitters.com/wp-content/uploads/2018/07/camping_header.jpg').load(function() {  
   pageContentOffset();

});
jQuery('.trip_header_page-not-found').attr('src', 'http://www.deepcanyonoutfitters.com/wp-content/uploads/2018/03/reid_lg.jpg').load(function() {  
   pageContentOffset();

});



  function openFirstPanel(){
    jQuery('.accordion > dt:first-child').next().addClass('active').slideDown();
  }

  (function($) {
      
    var allPanels = $('.accordion > dd').hide();
    var allArrows = $('.accordion > dt > a > span.fly_btn');
    
    // openFirstPanel();
      
    jQuery('.accordion > dt > a').click(function() {
        $this = $(this);
        $target =  $this.parent().next();
        $arrow = $this.find('.fly_btn');
        
      console.log($this);
        if($target.hasClass('active')){
          $target.removeClass('active').slideUp();
          $arrow.removeClass('icon-circle-down').addClass('icon-circle-down');
        }else{
          allPanels.removeClass('active').slideUp();
          allArrows.removeClass('icon-circle-up').addClass('icon-circle-down');
          $target.addClass('active').slideDown();
          $arrow.addClass('icon-circle-up').removeClass('icon-circle-down');
        }
        
      return false;
    });

  })(jQuery);


  if (!jQuery('body').hasClass('home')){
    jQuery('body').addClass('interior');
  }

  if (jQuery('body').hasClass('interior')){
    jQuery('ul.submenu').addClass('biggap');
  }

  jQuery(".downarrow").click(function() {
    var menuheight = jQuery(".fixed_nav").height() * 2;
    jQuery('html, body').animate({
        scrollTop: jQuery("#cta_row").offset().top -menuheight }, 2000);
  });

	
  jQuery('ul#menu').addClass('vertical medium-horizontal menu');
  jQuery('ul#menu > li').addClass('hvr-underline-from-center');

  // Split Reports-Archive h2 and bold 2nd word for style
  jQuery('figure.effect-oscar_report figcaption > h2').each(function () { 
    var h2 = jQuery(this);
    var charNum = h2.text().length;
    if (charNum > 16){
      h2.addClass('long_h2');
    }
    var text = h2.text().split(' ');
    for( var i = 1, len = text.length; i < len; i=i+2 ) {
        text[i] = '<span>' + text[i] + '</span>';
    }
    h2.html(text.join(' '));



  });

  pageTitleOffset();

  
}); //End Main Doc Ready


// jQuery(window).scroll(function(){
//     jQuery(".logo").css("opacity", 1 - jQuery(window).scrollTop() / 100);
// });

jQuery(window).resize(function(){
    pageTitleOffset();
    if (Modernizr.mq('only screen and (min-width: 769px)')) {
      pageContentOffset();

    }
});

// jQuery(window).scroll(function() {

//   if (Modernizr.mq('only screen and (min-width: 770px)')) {
//     if (jQuery('body').hasClass('home')){
//       if (jQuery(window).scrollTop() > 100) {
//           jQuery('.title_logo').slideDown('slow');
//           jQuery('#phone_container').slideDown('slow');
//           jQuery('ul.submenu').addClass('biggap');
//       }
//       else {
//           jQuery('.title_logo').slideUp('slow');
//           jQuery('#phone_container').slideUp('slow');
//           jQuery('ul.submenu').removeClass('biggap');
//       }
//     }
//   }
// });



// River Report Hero Sizing
function pageContentOffset() {
  var heroheight = jQuery(".fixed_img_container > img").height();
  var pushheight = (heroheight / 2) - 70;
  jQuery('.river_title h1').css({
    marginTop : pushheight,
    transition : 'margin-top 1s ease-in-out'
  });
  jQuery('.sliding_content_container').css('margin-top',pushheight );
}


function pageTitleOffset() {
  var menuheight = jQuery(".fixed_nav").height();
  var hHeight = jQuery('h3.page_title').height();
  var finishedheight = hHeight;
  jQuery('.river_archive_hero').css('height',menuheight );
}



//Back To Top Scrolling
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');


  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

//smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

