$(document).ready(function() {
  // Dropdowns
  $('.ui.dropdown')
    .dropdown({
      // you can use any ui transition
      transition: 'drop'
    })
  ;
  // Preload Images
  // Image1= new Image(1440,924)
  // Image1.src = 'images/1.jpg'
  //
  // Image2 = new Image(1440,924)
  // Image2.src = 'images/2.jpg'
  //
  // Image3 = new Image(1440,924)
  // Image3.src = 'images/3.jpg'
  //
  // Image4 = new Image(1440,924)
  // Image4.src = 'images/4.jpg'
  // Mobile Nav
  $('.ui.modal')
    .modal('attach events', '.collapse-menu', 'show')
  ;
  // Instagram
  if ($('#instafeed').length > 0) {
    var feed = new Instafeed({
      get: 'user',
      userId: 181468269,
      accessToken: '181468269.467ede5.834e93572e2149058be827140536bb2a',
      limit: 8,
      sortBy: 'random',
      resolution: 'low_resolution',
      // filter: function(image) {
      //   return image.tags.indexOf('privatedining') >= 0;
      // }
    });
    feed.run();
    }
  // Store Hours
  var date = new Date();

  var currentDay = date.getDay();

  $('.hours span:eq(' + currentDay +')').addClass('show-time');

  // Ticker
  $('#lightSlider').lightSlider({
    item: 1,
    autoWidth: false,
    pager: true,
    keyPress: true,
    adaptiveHeight: true,
    auto: true,
    loop: true,
    speed: 800,
    pause: 6000
  });

  // New Background Image Slider
  $('.hero').bkgSlide({
      images: ['images/11.jpg','images/12.jpg','images/13.jpg','images/14.jpg','images/15.jpg'],
      speed: 8000,
      width: '100%',
      height: 'auto'
  });
});

// Scroll to anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(
      /^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +
        ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Menu Tabs
jQuery(function() {
  jQuery('.next').click(function() {
    jQuery('.menu-container').fadeOut(1000);
    jQuery('#menu' + $(this).attr('target')).fadeIn(1000);
    return false;
  });
  $('.next').click(function() {
    $('a.active').not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});

// Background Image Cycle
// $(window).load(function() {
//   var i = 0;
//   var images = ['images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg', 'images/1.jpg' ];
//   var image = $('.hero');
//   //Initial Background image setup
//   image.css('background', 'url(images/1.jpg)');
//   //Change image at regular intervals
//   setInterval(function() {
//     image.fadeOut(3000, function() {
//       image.css('background', 'url(' + images[i++] + ')');
//       image.fadeIn(3000);
//     });
//     if (i == images.length) i = 0;
//   }, 4000);
// });
