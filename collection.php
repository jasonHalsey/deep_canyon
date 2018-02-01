<?php
/*
Template Name: reels - product collection
*/
  get_header();
?>
<section class="interior_hero river_archive_hero">
  
</section>
<!-- TODO: Add Backgroungd Image Header  -->
<div class="row">
  <h3 class="page_title"><?php the_title();?></h3> 
</div>
<div class="row">  
  <div id="collection-component-5dc9e337757"></div>
<div id='collection-component-8f7b84e0ecb'></div>
<script type="text/javascript">
/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'confluence-fly-shop.myshopify.com',
      apiKey: '757a93c4773a92c7ee39d4e862a76d5f',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 359189065,
        node: document.getElementById('collection-component-8f7b84e0ecb'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
		  "product": {
		    "buttonDestination": "modal",
		    "variantId": "all",
		    "contents": {
		      "variantTitle": false,
		      "options": false,
		      "description": false,
		      "buttonWithQuantity": false,
		      "quantity": false
		    },
		    "text": {
		      "button": "VIEW PRODUCT"
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "calc(25% - 20px)",
		          "margin-left": "20px",
		          "margin-bottom": "50px"
		        }
		      }
		    }
		  },
		  "cart": {
		    "contents": {
		      "button": true
		    },
		    "styles": {
		      "footer": {
		        "background-color": "#ffffff"
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "variantTitle": false,
		      "buttonWithQuantity": true,
		      "button": false,
		      "quantity": false
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      }
		    }
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  }
		}
      });
    });
  }
})();
/*]]>*/
</script>
</div>

<?php get_footer(); ?>