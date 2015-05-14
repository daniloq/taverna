$(document).ready(function() {
  // Dropdowns
  $('.ui.dropdown')
    .dropdown({
      // you can use any ui transition
      transition: 'drop'
    })
  ;
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
      resolution: 'low_resolution'
    });
    feed.run();
    }
  // Store Hours
  var date = new Date();

  var currentDay = date.getDay();

  $('.hours span:eq(' + currentDay +')').addClass('show-time');
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
});
$('.next').click(function() {
  $('a.active').not(this).removeClass('active');
  $(this).toggleClass("active");
});

// Background Image Cycle
$(window).load(function() {
  var i = 0;
  var images = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg' ];
  var image = $('.hero');
  //Initial Background image setup
  image.css('background', 'url(images/hero-1.jpg)');
  //Change image at regular intervals
  setInterval(function() {
    image.fadeOut(3000, function() {
      image.css('background', 'url(' + images[i++] + ')');
      image.fadeIn(3000);
    });
    if (i == images.length) i = 0;
  }, 4000);
});
