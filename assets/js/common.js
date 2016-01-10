// smmothscroll
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href === "#" || href === "" ? 'html' : href);
    var position = 0;
    if(target === 'html') {
      position = target.offset().top;
    } else {
      position = target.offset().top - $('#js-tracking').height();
    }
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// tarcking
$(function () {
  $waypoint = $('#anc-about');
  $target = $('#js-tracking');
  trackingPos = $waypoint.offset().top;
  isTracking = false;

  var toggleTracking = function () {
    if (this.isTracking) {
      endTracking();
    } else {
      startTracking();
    }
    this.isTracking =!this.isTracking;
  };

  var startTracking = function () {
    $target.addClass('is-tracking');
  };

  var endTracking = function () {
    $target.removeClass('is-tracking');
  };

  new Waypoint({
    element: $waypoint,
    offset: $target.height() + 'px',
    handler: function(direction) {
      toggleTracking();
    }
  });
});

// amimation
$(function () {

  setTimeout(function () {
    $('body').addClass('is-animation');
    setTimeout(function () {
      $('.header').addClass('is-animation');
    }, 600);
    setTimeout(function () {
      $('.hero').addClass('is-animation');
    }, 800);
  }, 400);

  new Waypoint({
    element: document.getElementById('anc-about'),
    offset: $('#js-tracking').height() + 'px',
    handler: function(direction) {
      $('#anc-about').find('.section').addClass('is-animation');
    }
  });

  new Waypoint({
    element: document.getElementById('anc-service'),
    offset: $('#js-tracking').height() + 'px',
    handler: function(direction) {
      $('#anc-service').find('.section').addClass('is-animation');
    }
  });
});

// drawer
$(function () {
  $(".drawer").drawer();
});
