

var portfolioPostsContainer = document.getElementById("portfolio-posts-container");
if (portfolioPostsContainer) {
  window.onload = function(){
      var ourRequest = new XMLHttpRequest();
      ourRequest.open('GET', 'http://www.confluenceflyshop.com/wp-json/wp/v2/report/');
      ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
          var data = JSON.parse(ourRequest.responseText);
          createHTML(data);
        } else {
          console.log("We connected to the server, but it returned an error.");
        }
      };

      ourRequest.onerror = function() {
        console.log("Connection error");
      };

      ourRequest.send();
  }


  function createHTML(postsData) {
    var ourHTMLString = '';
    var metoliousPost = document.getElementById("metolius");
    for (i = 0; i < postsData.length; i++) {
      var old_Link = postsData[i].link;
      var new_Link = old_Link.replace('http://confluenceflyshop.com/report/', 'http://localhost:8888/deep_canyon/');

      ourHTMLString += '<div class="excerpt callout feed_block" id="' + postsData[i].slug + '">';
      ourHTMLString += '<div class="feed_content">';
      ourHTMLString += '<h2>' + postsData[i].title.rendered + '</h2>';
      ourHTMLString += '<div class="report_block">';
      ourHTMLString += postsData[i].cmb2.report_metabox._cmb2_guide_report;
      // ourHTMLString += '<a href=" ' + new_Link + '">' + postsData[i].title.rendered + '</a>';
      ourHTMLString += '<a href=" ' + new_Link + '"> Read More</a>';
      ourHTMLString += '</div>';
      ourHTMLString += '</div>';
      ourHTMLString += '</div>';

    }
    portfolioPostsContainer.innerHTML = ourHTMLString;
  }
}

