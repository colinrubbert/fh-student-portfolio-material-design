$(function() {
  aboutSlider();
});

//Function to open and close about section slider
function aboutSlider() {
  $('#about .section-wrapper').click(function() {
    $('#about-slider').addClass('toggle');
    $('.about-section-close').removeClass('toggle');
  });

  $('.about-section-close').click(function() {
    $('#about-slider').removeClass('toggle');
  });
}
