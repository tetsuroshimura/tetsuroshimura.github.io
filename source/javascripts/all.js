$(function(){
  var $video = $('video');
  var $body = $('body');
  var $main = $('#main');
  var $worksBg = $('#worksBg');

  // User Agent
  var agent = navigator.userAgent;
  if ( agent.search("iPad") != -1 || agent.search("iPhone") != -1 || agent.search("Android") != -1 ){
    var isMobile = true;
  }


  if ( isMobile ) {
    $body.removeClass('loading');
    $main.css('opacity', 1);
    $('#worksBg').remove();

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

    $('#worksTitle').find('a').each(function(){
      var bg = $(this).attr('data-id');
      $(this).hover(function() {
        $(bg).removeClass('out')
             .addClass('reset');
        document.body.offsetHeight;
        $(bg).removeClass('reset')
             .addClass('in');
      }, function() {
        $(bg).removeClass('in')
             .addClass('out');
      });

    });

  }

});
