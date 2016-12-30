( function() {
  var videos = $('video');
  var $body = $('body');
  var $main = $('#main');
  var $worksBg = $('#worksBg');
  var $worksTitle = $('#worksTitle');

  // User Agent
  var agent = navigator.userAgent;
  if ( agent.search("iPad") != -1 || agent.search("iPhone") != -1 || agent.search("Android") != -1 ){
    var isMobile = true;
  }


  if ( isMobile ) {
    $worksBg.remove();

  } else {

    var $titles = [];
    $worksTitle.find('a').each(function(i){
      $titles[i] = $(this);
      var bg = $titles[i].attr('data-id');
      $titles[i].hover(function() {
        $(bg).removeClass('out')
             .addClass('reset');
        document.body.offsetHeight;
        $(bg).removeClass('reset')
             .addClass('in');
        $worksTitle.addClass('hovered');
        $titles[i].addClass('on');
      }, function() {
        $(bg).removeClass('in')
             .addClass('out');
        $worksTitle.removeClass('hovered');
        $titles[i].removeClass('on');
      });

    });

  }

  $(window).load(function(){
    $body.addClass('show');
    setTimeout(function(){
      $body.addClass('hide');
      setTimeout(function(){
        $body.removeClass('loading show hide');
      }, 700);
    }, 1500);
  });
})();
