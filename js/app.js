jQuery(document).foundation();

jQuery(window).on("load", function() {
  // pageContentOffset();
  console.log('inside load');
});


jQuery(document).ready(function() {

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

  jQuery(".icon-calendar").click(function() {
    var menuheight = jQuery(".fixed_nav").height();
    jQuery('html, body').animate({
        scrollTop: jQuery("#cal-top").offset().top -menuheight }, 2000);
  });


	
  jQuery('ul#menu').addClass('vertical medium-horizontal menu');
  jQuery('ul#menu > li').addClass('hvr-underline-from-center');

  // Split Reports-Archive h2 and bold 2nd word for style
  jQuery('figure.effect-oscar_report figcaption > h2').each(function () { 
    var h2 = jQuery(this);
    var charNum = h2.text().length;
    if (charNum > 14){
      h2.addClass('long_h2');
    }
    var text = h2.text().split(' ');
    for( var i = 1, len = text.length; i < len; i=i+2 ) {
        text[i] = '<span>' + text[i] + '</span>';
    }
    h2.html(text.join(' '));
  });

  // moveCalNav();
  // pageTitleOffset();
  
}); //End Main Doc Ready


jQuery(window).scroll(function(){
    jQuery(".logo").css("opacity", 1 - jQuery(window).scrollTop() / 100);
});

jQuery(window).resize(function(){
    // pageTitleOffset();
    // pageContentOffset()
});

jQuery(window).scroll(function() {

  if (jQuery('body').hasClass('home')){
    if (jQuery(window).scrollTop() > 100) {
        jQuery('.title_logo').slideDown('slow');
        jQuery('#phone_container').slideDown('slow');
        jQuery('ul.submenu').addClass('biggap');
    }
    else {
        jQuery('.title_logo').slideUp('slow');
        jQuery('#phone_container').slideUp('slow');
        jQuery('ul.submenu').removeClass('biggap');
    }
  }
});

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

// // Move Calendar's Navigation 
// function moveCalNav() {
//   var translate = jQuery('.ai1ec-pull-left');
//   jQuery(translate).detach();
//   jQuery('.ai1ec-calendar').prepend($(translate));
// }

function pageTitleOffset() {
  var menuheight = jQuery(".fixed_nav").height();
  var hHeight = jQuery('h3.page_title').height();
  var finishedheight = hHeight;
  jQuery('.river_archive_hero').css('height',menuheight );
}

  // Add Yelp Reviews to Sidebar
 (function() { var s = document.createElement("script");s.async = true;s.onload = s.onreadystatechange = function(){getYelpWidget("deep-canyon-outfitters-bend","300","RED","y","y","3");};s.src='http://chrisawren.com/widgets/yelp/yelpv2.js' ;var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);})();

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

jQuery(function($) {
  jQuery("#rss-feeds").rss("feed://www.fpc.org/rss/rssAdultCounts.aspx",
      {
        entryTemplate: '<p class="rss_title">Ending on {date}</p><p class="speciesCount">{shortBodyPlain}</p>',
        layoutTemplate: "<div class='feed-container'>{entries}</div>",
        success: function(){
          var initialString = jQuery('p.speciesCount').text();
          var dataArray = initialString .split(";");
          var arr = $.makeArray( dataArray );
          var steelhead =  arr[2];
          var wild_steelhead =  arr[3];
          //Replace Full RSS with just Steelhead count @ Bonneville Dam
          jQuery("p.speciesCount").html("<ul><li>" + steelhead + "</li><li>" + wild_steelhead + "</li></ul>");
          jQuery("h3.rss_title").unwrap();

        },
        dateFormat: 'M/D/YYYY',
        limit: 100,
        filterLimit: 10,
        filter: function(entry, tokens) {
        return tokens.title.indexOf('BONNEVILLE') > -1
      }
    })
})

