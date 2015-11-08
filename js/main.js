// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();

var openBox = function(id) {

  var box1 = document.getElementById("box-1");
  var box2 = document.getElementById("box-2");
  var box3 = document.getElementById("box-3");

  var buttons = document.getElementById("buttons")
  var images = buttons.getElementsByTagName('img');
  var titles = buttons.getElementsByTagName('h3');
  var lines = buttons.getElementsByTagName('hr');

  var sec3 = document.getElementById("sec3");

  if (id == 1) {
    box1.style.display = "block";
    box2.style.display = "none";
    box3.style.display = "none";
    titles[0].style.color = "#0DB575";
    titles[1].style.color = "#5A5A5A";
    titles[2].style.color = "#5A5A5A";
    images[0].style.opacity = "1";
    images[1].style.opacity = "0.5";
    images[2].style.opacity = "0.5";
    sec3.style.height = "1000px";
  } else if (id == 2) {
    box1.style.display = "none";
    box2.style.display = "block";
    box3.style.display = "none";
    titles[0].style.color = "#5A5A5A";
    titles[1].style.color = "#0DB575";
    titles[2].style.color = "#5A5A5A";
    images[0].style.opacity = "0.5";
    images[1].style.opacity = "1";
    images[2].style.opacity = "0.5";
    sec3.style.height = "1000px";
  } else {
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "block";
    titles[0].style.color = "#5A5A5A";
    titles[1].style.color = "#5A5A5A";
    titles[2].style.color = "#0DB575";
    images[0].style.opacity = "0.5";
    images[1].style.opacity = "0.5";
    images[2].style.opacity = "1";
    sec3.style.height = "800px";
  }
}