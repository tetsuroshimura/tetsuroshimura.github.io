$(function(){
  var $video = $('video');
  var $body = $('#body');

  // Show contents when vedeo can be played
  var count = 0;
  for (var i = 0; i < $video.length; i++) {
    $video[i].addEventListener('canplaythrough', function() {
      count++;
      if ( count == $video.length ) {
        $body.css('opacity', 1);
      }
    }, false);
  }
  // Show contents after 3s count
  setTimeout(function(){
    $body.css('opacity', 1);
  }, 3000);

});
