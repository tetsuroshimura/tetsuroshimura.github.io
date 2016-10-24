$(function(){
  var $video = $('video');
  var $body = $('body');
  var $main = $('#main');

  // User Agent
  var agent = navigator.userAgent;
  if ( agent.search("iPad") != -1 || agent.search("iPhone") != -1 || agent.search("Android") != -1 ){
    var isMobile = true;
  }


  if ( isMobile ) {
    $body.removeClass('loading');
    $main.css('opacity', 1);
    var bgImg = $('.bgimg');
    for (var i = 0; i < bgImg.length; i++) {
      bgImg[i].remove();
    }

  } else {
    // modify text "Loading..."
    var dot = 0;
    var loadingText = "Loading.";
    var loadingTextFunc = setInterval(function() {
      if (loadingText == "Loading..."){
        loadingText = "Loading";
      }
      loadingText = loadingText + ".";
      $body.attr('data-loading', loadingText);
    }, 400);

    // Show contents when vedeo can be played
    var count = 0;
    for (var i = 0; i < $video.length; i++) {
      $video[i].addEventListener('canplaythrough', function() {
        count++;
        if ( count == $video.length ) {
          $body.removeClass('loading');
          $main.css('opacity', 1);
          clearInterval(loadingTextFunc);
        }
      }, false);
    }
    // Show contents after 3s count
    setTimeout(function(){
      $body.removeClass('loading');
      $main.css('opacity', 1);
      clearInterval(loadingTextFunc);
    }, 3000);

  }

});
