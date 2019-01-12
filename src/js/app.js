import $ from 'jquery';
(function() {

  var words = [
      'Brands',
      'Animations',
      'Logos',
      'Presentations',
      'Explainers'
    ], i = 0;

  setInterval(function() {
    $('.brand').fadeOut(function() {
      $(this).html(words[i=(i+1)%words.length]).fadeIn();
    });
  }, 2000);

  $('#services').click(function() {
    $('html, body').animate({
      scrollTop: $('.services').offset().top
    }, 2000);
  });

  $('#contacts').click(function() {
    $('html, body').animate({
      scrollTop: $('.contacts').offset().top
    }, 2000);
  });

})();
