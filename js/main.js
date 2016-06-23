$(function() {
  aboutSlider();
  workSlider();
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

//Function to open and close work section slider
function workSlider() {
  $('#work .section-wrapper').click(function() {
    $('#work-slider').addClass('toggle');
    $('.work-section-close').removeClass('toggle');
  });

  $('.work-section-close').click(function() {
    $('#work-slider').removeClass('toggle');
  });
}
