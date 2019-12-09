$(document).ready(function () {
  /*  setTimeout(function(){
    var $svg = $('svg').drawsvg({
        duration: 2000,
        easing: 'linear'
      });

  $svg.drawsvg('animate');
      },2000);*/

  var diggitOffset = $(".diggit").height() / 1.1;

  var windowHeight = $(window).height();
  var offsetTop = 0;
  var scrollDownActive = true;

  $(window).scroll(function () { //when window is scrolled

    //set and check scrolldown and up
    scrollCheck();
    offsetTop = $(window).scrollTop();

  });

  $(window).resize(function () {

    scrollCheck();

  });

  function scrollCheck() {
    if (offsetTop >= (windowHeight / 3.1) && scrollDownActive) {
      $(".scroll-down").fadeOut();
      $(".scroll-up").fadeIn();
      scrollDownActive = false;
    }
    if (offsetTop < (windowHeight / 3.1) && !scrollDownActive) {
      $(".scroll-up").fadeOut();
      scrollDownActive = true;
    }
  };


  var wow = 0;

  function initWowReveal() {
    setTimeout(function () {
      $(".diggit.active").css("opacity", "100%");
      // WOW init
      wow = new WOW({
        /*callback: afterReveal,*/
        boxClass: 'reveal', // default
        animateClass: 'animated', // default
        offset: diggitOffset, // default
        mobile: true, // default
        live: true // default
      });

      wow.init();
    }, 700);
  }

  /*var showcopy = false;

  function afterReveal(el) {
    el.addEventListener('animationend', function () {
      console.log(el.className.split(/\s+/));
      if (((el.className.split(/\s+/)).indexOf("text-focus-in") >= 0)) {
        showcopy = true;
        console.log("");
        $(".copy-bg").addClass("text-focus-in");
      }
    });
  }*/

  $(".scroll-down").click(function () {
    $('html, body').animate({
      scrollTop: (windowHeight / 3)
    }, 1500);
  });
  $(".scroll-up").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });


  function scrollto(element) {
    $('html, body').animate({
      scrollTop: ($(element).offset().top)
    }, 5000);
  };


  var check_data = false;
  var wait_forTransition = false;
  $(".overlay button").click(function () {
    if (!$(".data.obligatory input").is(':checked')) {
      check_data = false;
      $(".overlay .check_error").addClass("show");

    } else {
      check_data = true;
      if ($(".overlay .check_error").hasClass("show")) {
        wait_forTransition = true;
        $(".overlay .check_error").removeClass("show");
      } else {
        $(".wrapper").removeClass("overlay-active");
        initWowReveal();
      }

    }
  });


  $(".overlay .check_error").on(
    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
    function () {
      if (wait_forTransition) {
        $(".wrapper").removeClass("overlay-active");
        initWowReveal();
        wait_forTransition = false;
      }
    }
  );


  var windowWidth = $(document).width();

  function generateRandomPos() {
    windowWidth = $(document).width();
    $(".diggit").each(function (index) {
      var randomNumber1 = generateRandomNumber(-1, 3);
      var randomNumber2 = generateRandomNumber(-3, 10);
      $(this).css("margin-left", randomNumber1 + "%").css("margin-top", randomNumber2 + "%");
    });
  }

  function generateRandomNumber(min, max) {
    var highlightedNumber = Math.random() * (max - min) + min;
    return highlightedNumber;

  }

  generateRandomNumber();

  generateRandomPos();

});
